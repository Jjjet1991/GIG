class Header extends HTMLElement
{
    constructor() {
        super();
    }

connectedCallback(){
    this.innerHTML = `
    <!--Logo-->
    <div>
        <img src="./images/GIGedited.png" class="img-fluid" alt="" style="width:33%;height:auto;margin-left: 33%;padding: 2%; margin-top:-5%;margin-bottom: -5%;">
    </div>

    <hr>
    
    <!--NavBar-->
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#829460;margin-bottom: 0;">
            <div class="container">
              <a class="navbar-brand"  style="font-family: 'Allerta Stencil', sans-serif;" href="./index.html">Home</a>
              <a class="navbar-brand"  style="font-family: 'Allerta Stencil', sans-serif;" href="./about.html">About</a>
              <a class="navbar-brand"  style="font-family: 'Allerta Stencil', sans-serif;" href="./portfolio.html">Portfolio</a>
              <a class="navbar-brand"  style="font-family: 'Allerta Stencil', sans-serif;" href="./contact.html">Contact</a>
            </div>
          </nav>
        </div>    
    `;
 }
}

customElements.define("header-component", Header);