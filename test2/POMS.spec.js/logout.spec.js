exports.LogoutPage = class Logout {
  constructor(page) {
    this.page = page;
    this.menuBtn = page.getByRole("button", { name: "Open Menu" });
    this.logoutBtn = page.locator('[data-test="logout-sidebar-link"]');
  }

  async logout(){
 await this.menuBtn.click();
 await this.logoutBtn.click();
  }
};
