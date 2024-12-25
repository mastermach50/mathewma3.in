let pages, index_items

function update_index() {
    
    console.log(index_items)
    for (let i = 0; i < pages.length; i++) {
        
        // Whether the page is in view is calculated not from the top of the view
        // but from an imaginary line 2/10 of the way from the top o fthe view
        let in_view = (
            pages[i].getBoundingClientRect().top <= 0.2*window.innerHeight &&
            pages[i].getBoundingClientRect().bottom > 0.2*window.innerHeight
        )
        
        if (in_view) {
            index_items[i].setAttribute("in_view", "")
        } else {
            index_items[i].removeAttribute("in_view")
        }
        
    }
}

window.onload = function() {
    pages = document.getElementsByClassName("page")
    index_items = document.getElementsByClassName("index")[0].getElementsByTagName("a")

    update_index()
    document.getElementsByClassName("content")[0].onscroll = function(){update_index()};
};