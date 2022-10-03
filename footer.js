class Footer extends HTMLElement
{
    constructor() {
        super();
    }

connectedCallback(){
    this.innerHTML = `
    <div  style="background-color:#829460;height:70px;">
    <div class="" style="margin-left:45%;">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-pinterest"></a>
        <a href="https://www.etsy.com/shop/GIGWoodcraft?ref=shop_sugg" target="blank" class="fa fa-etsy"></a>
    </div>
</div>`
 }
}

customElements.define("footer-component", Footer);