class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Castillo Castillo Estefania`;
  }
}
customElements.define("mi-footer", MiFooter);
