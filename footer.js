class Footer extends HTMLElement
{
    constructor() {
        super();
    }

connectedCallback(){
    this.innerHTML = `
    <div  style="background-color:#829460;height:70px;margin-top: 10px;">
    <div class="" style="margin-left:45%;">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-pinterest"></a>
    </div>
</div>`
 }
}

customElements.define("footer-component", Footer);