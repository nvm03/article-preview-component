const buttonMobile = document.querySelector('.share-btn-mob')
const activeButtonMob = document.querySelector('.active-btn-mob')

const authorMob = document.querySelector('.author-mob')
const socialPopMob = document.querySelector('.soc-pop-mob')

const buttonDeskt = document.querySelector('.share-btn-deskt')
const activeButtonDeskt = document.querySelector('.active-btn-deskt')

const socialPopDeskt = document.querySelector('.soc-pop-deskt')

buttonMobile.addEventListener('click', (e) => {
    e.preventDefault();
    //mobile
    authorMob.classList.add('hidden-author');
    socialPopMob.classList.remove('hidden-pop');
    //mobile end
    buttonDeskt.classList.add('hidden-btn')
    socialPopDeskt.classList.remove('hidden-pop')
    activeButtonDeskt.classList.remove('hidden-btn')
    
})

activeButtonMob.addEventListener('click', (e) => {
    e.preventDefault();
    //mobile
    authorMob.classList.remove('hidden-author');
    socialPopMob.classList.add('hidden-pop');
    //mobile end
    socialPopDeskt.classList.add('hidden-pop')
    buttonDeskt.classList.remove('hidden-btn')
    activeButtonDeskt.classList.add('hidden-btn')
})
//mobile end

//desktop start


buttonDeskt.addEventListener('click', (e) => {
    //mobile
    authorMob.classList.add('hidden-author');
    socialPopMob.classList.remove('hidden-pop');
    //mobile end
    buttonDeskt.classList.add('hidden-btn')
    socialPopDeskt.classList.remove('hidden-pop')
    activeButtonDeskt.classList.remove('hidden-btn')
})

activeButtonDeskt.addEventListener('click', (e) => {
    //mobile
    authorMob.classList.remove('hidden-author');
    socialPopMob.classList.add('hidden-pop');
    //mobile end
    socialPopDeskt.classList.add('hidden-pop')
    buttonDeskt.classList.remove('hidden-btn')
    activeButtonDeskt.classList.add('hidden-btn')
})
