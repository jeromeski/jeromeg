class Portfolio {
  constructor() {
      this.showMore = $(".portfolio__show-more");
      this.portfolioInfoTrigger = $(".portfolio__item-cta__link--info");
      this.portfolioSub = $(".portfolio__content-sub");
      this.isSubVisible = false;
      this.bindEvents();
  }

  bindEvents = () => {
    this.showMore.click(this.showSubContent);
      this.portfolioInfoTrigger.click(this.toggleInfo);
  }

  toggleInfo = (e) => {
      e.preventDefault();
      const $this = $(e.currentTarget);
      $this.children().toggleClass("portfolio__item-cta__icon--is-open");
      $this.parents(".portfolio__item-preview").toggleClass("portfolio__item-preview--is-open").siblings().slideToggle("fast");
  }

  showSubContent = () => {
    this.portfolioSub.slideToggle();
    this.isSubVisible ? this.showMore.text("Show more") : this.showMore.text("Show less");
    this.isSubVisible = !this.isSubVisible;
  }

}

const portfolio = new Portfolio();


