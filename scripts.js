let info_header= document.getElementById('info_header');
    info_header_block= document.getElementById('info_header_block');
    section_main=document.getElementById('section_main');
    arrow=document.getElementById('arrow');
    list_streamers_1=document.querySelector('.list_streamers_1');
    list_streamers= document.getElementById('list_streamers');
    list_dota_wiki_category=document.getElementById('list_dota_wiki_category');
    list_list_category= document.getElementById('list_list_category');
    input_name=document.getElementById('input_name');

input_name.addEventListener('input', () => {
    const heroes = [
        { name: 'Shadow fiend', block: hero_search_block_1 },
        { name: 'Zeus', block: hero_search_block_2 },
        { name: 'Earthshaker', block: hero_search_block_3 },
        { name: 'Storm spirit', block: hero_search_block_4 },
        { name: 'Ember spirit', block: hero_search_block_5 },
        { name: 'Faceless void', block: hero_search_block_6 }
    ];
    const inputValue = input_name.value.toLowerCase();
    if (inputValue===''){
        section_main.style.filter = '';
        section_main.style.transition = 'all .3s ease-in-out';
    } else{
        section_main.style.filter = 'brightness(15%)';
        section_main.style.transition = 'all .3s ease-in-out';
    }
    heroes.forEach(hero => {
        if (inputValue === '') {
            hero.block.style.display = 'none';
        } else if (hero.name.toLowerCase().startsWith(inputValue)) {
            hero.block.style.display = 'block';
        } else {
            hero.block.style.display = 'none';
        }
    });
});



info_header.addEventListener('click', () => {
    const isHidden = info_header_block.style.opacity === '0' || info_header_block.style.opacity === '';
    const isVisible = info_header_block.style.visibility === 'hidden' || info_header_block.style.visibility === '';
    if (isHidden && isVisible) {
        info_header_block.style.opacity = '1';
        info_header_block.style.visibility = 'visible';
        info_header_block.style.transform = 'translateY(0px)';
        section_main.style.filter = 'brightness(15%)';
        section_main.style.transition = 'all .3s ease-in-out';
        arrow.style.transform = 'rotate(-45deg)';
    } else {
        info_header_block.style.opacity = '0';
        info_header_block.style.visibility = 'hidden';
        info_header_block.style.transform = 'translateY(0px)';
        section_main.style.filter = '';
        section_main.style.transition = 'all .3s ease-in-out';
        arrow.style.transform = 'rotate(135deg)';
    }
    if (name_streamer.style.display === 'flex') {
        name_streamer.style.display = 'none';
        list_streamers.style.display='none';
        list_dota_wiki_category.style.display='none';
        list_list_category.style.display='none';
        downarrow_list.style.transform = 'rotate(135deg)';
        list_streamers_1.style.width = '';
        list_streamers_1.style.height = '';
        downarrow_list.style.top = '5px';
        info_header_block.style.height = '100px';
        list.style.alignItems = "center";
        list_category.style.marginTop = '0px';
        downarrow_list.style.marginTop = '0px';
        const Hidden_dota_wiki = list_dota_wiki.style.display === 'block'|| list_dota_wiki.style.display=== '';
        if (Hidden_dota_wiki){
            list_dota_wiki.style.display='none';
        } else{
            list_dota_wiki.style.display='block';
        }
        const Hidden_contact = list_contact.style.display === 'block'|| list_contact.style.display==='';
            
        if (Hidden_contact ){
            list_contact.style.display='none';
        } else{
            list_contact.style.display='block';
        }
    }  else if( block_hero_dota.style.display==='flex'){
        block_hero_dota.style.display='none';
        list_streamers.style.display='none';
        list_dota_wiki_category.style.display='none';
        list_list_category.style.display='none';
        downarrow_list_2.style.transform= 'rotate(135deg)';
        downarrow_list_2.style.marginTop= '0px';
        list_dota_wiki.style.width='';
        list_dota_wiki.style.height='';
        downarrow_list_2.style.top= '5px';
        downarrow_list_2.style.marginTop= '0px';
        info_header_block.style.height='100px';
        list.style.alignItems = "center";
        list_dota_wiki_category.style.width= '';
        list_dota_wiki_category.style.justifyContent="";
        list_category_2.style.marginTop= '0px';
        const Hidden_list_streamers_1 = list_streamers_1.style.display === 'block'|| list_streamers_1.style.display=== '';
        if (Hidden_list_streamers_1){
            list_streamers_1.style.display='none';
        } else{
            list_streamers_1.style.display='block';
        }
        const Hidden_contact = list_contact.style.display === 'block'|| list_contact.style.display==='';
                
        if (Hidden_contact ){
            list_contact.style.display='none';
        } else{
            list_contact.style.display='block';
        }
    }else if(name_contacts.style.display==='flex'){
        name_contacts.style.display='none';
        list_streamers.style.display='none';
        list_dota_wiki_category.style.display='none';
        list_list_category.style.display='none';
        downarrow_list_1.style.top= '5px';
        downarrow_list_1.style.transform='rotate(135deg)';
        list_contact.style.width='';
        list_contact.style.height='';
        info_header_block.style.height='100px';
        list_list_category.style.width= '';
        list_list_category.style.justifyContent="";
        list.style.alignItems = "center";
        list_category_1.style.marginTop= '0px';
        downarrow_list_1.style.top= '5px';
        downarrow_list_1.style.marginTop= '0px';
        const Hidden_dota_wiki = list_dota_wiki.style.display === 'block'|| list_dota_wiki.style.display=== '';
        if (Hidden_dota_wiki){
            list_dota_wiki.style.display='none';
        } else{
            list_dota_wiki.style.display='block';
        }
        const Hidden_list_streamers_1 =list_streamers_1.style.display === 'block'|| list_streamers_1.style.display==='';
            
        if (Hidden_list_streamers_1 ){
            list_streamers_1.style.display='none';
        } else{
            list_streamers_1.style.display='block';
        }
    }   else{
            list_streamers.style.display='flex';
            list_dota_wiki_category.style.display='flex';
            list_list_category.style.display='flex';
    }

});




let name_streamer= document.getElementById('name_streamer');
    list_dota_wiki= document.querySelector('.list_dota_wiki');
    list_contact= document.getElementById('list_contact');
    list= document.querySelector('.list');
    downarrow_list =document.getElementById('downarrow_list');
    list_category= document.getElementById('list_category');

list_streamers.addEventListener('click',() =>{
    const isHidden = name_streamer.style.display === 'none'|| name_streamer.style.display==='';
    
    if (isHidden){
        name_streamer.style.display = 'flex';
        downarrow_list.style.transform= 'rotate(-45deg)';
        downarrow_list.style.transition='all .3s ease-in-out';
        list_streamers_1.style.width='100%';
        list_streamers_1.style.height='250px';
        downarrow_list.style.top= '10px';
        downarrow_list.style.marginTop= '5px';
        info_header_block.style.height='300px';
        list.style.alignItems = "flex-start";
        list_category.style.marginTop= '5px';
    } else{
        name_streamer.style.display = 'none';
        downarrow_list.style.transform= 'rotate(135deg)';
        list_streamers_1.style.width='';
        list_streamers_1.style.height='';
        downarrow_list.style.top= '5px';
        info_header_block.style.height='100px';
        list.style.alignItems = "center";
        list_category.style.marginTop= '0px';
        downarrow_list.style.marginTop= '0px';
    }
    const Hidden_dota_wiki = list_dota_wiki.style.display === 'block'|| list_dota_wiki.style.display=== '';
    if (Hidden_dota_wiki){
        list_dota_wiki.style.display='none';
    } else{
        list_dota_wiki.style.display='block';
    }
    const Hidden_contact = list_contact.style.display === 'block'|| list_contact.style.display==='';
    
    if (Hidden_contact ){
        list_contact.style.display='none';
    } else{
        list_contact.style.display='block';
    }
})
let downarrow_list_2= document.getElementById('downarrow_list_2');
    list_category_2=document.getElementById('list_category_2');


list_dota_wiki_category.addEventListener('click', () =>{
    const isHidden = block_hero_dota.style.display==='none' || block_hero_dota.style.display==='';
    if(isHidden){
        block_hero_dota.style.display='flex';
        downarrow_list_2.style.transform= 'rotate(-45deg)';
        downarrow_list_2.style.transition='all .3s ease-in-out';
        list_dota_wiki.style.width='100%';
        list_dota_wiki.style.height='100%';
        downarrow_list_2.style.marginTop= '5px';
        downarrow_list_2.style.top= '10px';
        info_header_block.style.height='230px';
        list.style.alignItems = "flex-start";
        list_dota_wiki_category.style.width= '100%';
        list_dota_wiki_category.style.display='flex';
        list_dota_wiki_category.style.justifyContent="center";
        list_category_2.style.marginTop= '5px';
    } else{
        block_hero_dota.style.display='none';
        downarrow_list_2.style.transform= 'rotate(135deg)';
        downarrow_list_2.style.marginTop= '0px';
        list_dota_wiki.style.width='';
        list_dota_wiki.style.height='';
        downarrow_list_2.style.top= '5px';
        downarrow_list_2.style.marginTop= '0px';
        info_header_block.style.height='100px';
        list.style.alignItems = "center";
        list_dota_wiki_category.style.width= '';
        list_dota_wiki_category.style.display='';
        list_dota_wiki_category.style.justifyContent="";
        list_category_2.style.marginTop= '0px';
    }
    const Hidden_list_streamers_1 = list_streamers_1.style.display === 'block'|| list_streamers_1.style.display=== '';
    if (Hidden_list_streamers_1){
        list_streamers_1.style.display='none';
    } else{
        list_streamers_1.style.display='block';
    }
    const Hidden_contact = list_contact.style.display === 'block'|| list_contact.style.display==='';
    
    if (Hidden_contact ){
        list_contact.style.display='none';
    } else{
        list_contact.style.display='block';
    }
})

let name_contacts= document.getElementById('name_contacts');
    downarrow_list_1= document.getElementById('downarrow_list_1');
    list_category_1= document.getElementById('list_category_1');

list_list_category.addEventListener('click', () =>{
    const isHidden=name_contacts.style.display==='none'|| name_contacts.style.display==='';
    if (isHidden){
        name_contacts.style.display='flex';
        downarrow_list_1.style.transform= 'rotate(-45deg)';
        downarrow_list_1.style.transition='all .3s ease-in-out';
        list_contact.style.width='100%';
        list_contact.style.height='170px';
        downarrow_list_1.style.top= '10px';
        downarrow_list_1.style.marginTop= '5px';
        info_header_block.style.height='210px';
        list.style.alignItems = "flex-start";
        list_list_category.style.width= '100%';
        list_list_category.style.display='flex';
        list_list_category.style.justifyContent="end";
        list_category_1.style.marginTop= '5px';
    } else{
        name_contacts.style.display='none';
        downarrow_list_1.style.top= '5px';
        downarrow_list_1.style.transform='rotate(135deg)';
        list_contact.style.width='';
        list_contact.style.height='';
        info_header_block.style.height='100px';
        list_list_category.style.width= '';
        list_list_category.style.display='';
        list_list_category.style.justifyContent="";
        list.style.alignItems = "center";
        list_category_1.style.marginTop= '0px';
        downarrow_list_1.style.top= '5px';
        downarrow_list_1.style.marginTop= '0px';
    }
    const Hidden_dota_wiki = list_dota_wiki.style.display === 'block'|| list_dota_wiki.style.display=== '';
    if (Hidden_dota_wiki){
        list_dota_wiki.style.display='none';
    } else{
        list_dota_wiki.style.display='block';
    }
    const Hidden_list_streamers_1 =list_streamers_1.style.display === 'block'|| list_streamers_1.style.display==='';
    
    if (Hidden_list_streamers_1 ){
        list_streamers_1.style.display='none';
    } else{
        list_streamers_1.style.display='block';
    }
})

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });