const fruitOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragon fruit", value: "dragon-fruit" },
  { label: "Grapes", value: "grapes" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Strawberry", value: "strawberry" }
];

class Dropdown {
  constructor(root, config) {
    this.root = root;
    this.options = config.options || [];
    this.placeholder = config.placeholder || "Select option";
    this.multiple = Boolean(config.multiple);
    this.searchable = config.searchable !== false;
    this.onChange = config.onChange || function () {};
    this.selected = this.multiple ? [] : null;
    this.searchTerm = "";

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);

    this.render();
    this.bindEvents();
  }

  render() {
    this.root.className = "dropdown";
    this.root.innerHTML = `
      <button class="dropdown-toggle" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="dropdown-value"></span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div class="dropdown-menu">
        ${this.searchable ? '<input class="dropdown-search" type="search" placeholder="Search options" autocomplete="off">' : ""}
        <div class="dropdown-list" role="listbox" ${this.multiple ? 'aria-multiselectable="true"' : ""}></div>
      </div>
    `;

    this.toggle = this.root.querySelector(".dropdown-toggle");
    this.valueNode = this.root.querySelector(".dropdown-value");
    this.menu = this.root.querySelector(".dropdown-menu");
    this.searchInput = this.root.querySelector(".dropdown-search");
    this.list = this.root.querySelector(".dropdown-list");

    this.renderValue();
    this.renderOptions();
  }

  bindEvents() {
    this.toggle.addEventListener("click", () => this.toggleMenu());

    if (this.searchInput) {
      this.searchInput.addEventListener("input", (event) => {
        this.searchTerm = event.target.value.toLowerCase().trim();
        this.renderOptions();
      });
    }

    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleKeydown);
  }

  toggleMenu() {
    this.root.classList.contains("open") ? this.close() : this.open();
  }

  open() {
    this.root.classList.add("open");
    this.toggle.setAttribute("aria-expanded", "true");

    if (this.searchInput) {
      requestAnimationFrame(() => this.searchInput.focus());
    }
  }

  close() {
    this.root.classList.remove("open");
    this.toggle.setAttribute("aria-expanded", "false");
    this.searchTerm = "";

    if (this.searchInput) {
      this.searchInput.value = "";
    }

    this.renderOptions();
  }

  handleDocumentClick(event) {
    if (!this.root.contains(event.target)) {
      this.close();
    }
  }

  handleKeydown(event) {
    if (event.key === "Escape") {
      this.close();
      this.toggle.focus();
    }
  }

  selectOption(option) {
    if (this.multiple) {
      const exists = this.selected.some((item) => item.value === option.value);
      this.selected = exists
        ? this.selected.filter((item) => item.value !== option.value)
        : [...this.selected, option];
    } else {
      this.selected = option;
      this.close();
    }

    this.renderValue();
    this.renderOptions();
    this.onChange(this.getValue());

    if (this.multiple) {
      this.close();
    }
  }

  getValue() {
    return this.multiple ? [...this.selected] : this.selected;
  }

  renderValue() {
    if (this.multiple && this.selected.length) {
      this.valueNode.innerHTML = this.selected
        .map((option) => `<span class="tag">${option.label}</span>`)
        .join("");
      return;
    }

    if (!this.multiple && this.selected) {
      this.valueNode.textContent = this.selected.label;
      return;
    }

    this.valueNode.innerHTML = `<span class="placeholder">${this.placeholder}</span>`;
  }

  renderOptions() {
    const filteredOptions = this.options.filter((option) =>
      option.label.toLowerCase().includes(this.searchTerm)
    );

    if (!filteredOptions.length) {
      this.list.innerHTML = `<div class="empty-state">No options found</div>`;
      return;
    }

    this.list.innerHTML = filteredOptions
      .map((option) => {
        const selected = this.isSelected(option);
        return `
          <button
            class="dropdown-option${selected ? " selected" : ""}"
            type="button"
            role="option"
            aria-selected="${selected}"
            data-value="${option.value}"
          >
            <span>${option.label}</span>
            ${selected ? '<span class="checkmark" aria-hidden="true">✓</span>' : ""}
          </button>
        `;
      })
      .join("");

    this.list.querySelectorAll(".dropdown-option").forEach((button) => {
      button.addEventListener("click", () => {
        const option = this.options.find((item) => item.value === button.dataset.value);
        this.selectOption(option);
      });
    });
  }

  isSelected(option) {
    if (this.multiple) {
      return this.selected.some((item) => item.value === option.value);
    }

    return this.selected && this.selected.value === option.value;
  }
}

const singleResult = document.querySelector("#single-result");
const multiResult = document.querySelector("#multi-result");

new Dropdown(document.querySelector("#single-dropdown"), {
  options: fruitOptions,
  placeholder: "Choose a fruit",
  onChange: (selected) => {
    singleResult.textContent = selected ? selected.label : "None";
  }
});

new Dropdown(document.querySelector("#multi-dropdown"), {
  options: fruitOptions,
  placeholder: "Choose fruits",
  multiple: true,
  onChange: (selectedItems) => {
    multiResult.textContent = selectedItems.length
      ? selectedItems.map((item) => item.label).join(", ")
      : "None";
  }
});
