function render({ model, el }) {
    if(document.getElementsByName("google-site-verification").length > 0){
        return;
    }
    let elem = document.createElement("meta");
    elem.setAttribute("name", "google-site-verification");
    elem.setAttribute("content", "y9DGVfBonFjmr3dkb9O-OyPvvLRtpRIIb_rbtUawrAI");
    let h = document.getElementsByTagName("head");
    h[0].appendChild(elem);
}
export default { render };
