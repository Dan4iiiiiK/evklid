document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__nav-list-item-link').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.section-work__container-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__nav-list-item-link').forEach(function(tabColor) {
        tabColor.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.section-work__nav-list-item-link').forEach(function(tabContent) {
                tabContent.classList.remove('tab-color-active')
            })
            document.querySelector(`[data-color="${path}"]`).classList.add('tab-color-active')
        })
    })
})