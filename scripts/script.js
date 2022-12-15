image_id = ''
eve = ''
img_cat = {6331:[1184],
    6346:[1013, 1849, 1572, 1040, 2734],
    6483:[1967, 1113, 2730, 1069],
    6497:[1791, 1010]}
idlist = [1184,1013, 1849, 1572, 1040, 2734,1967, 1113, 2730, 1069,1791, 1010]
catlist = ['Sugar Melon','Chips, french fries','Hamburger','Hamburger bun','Salad, leaf / salad, green','Ketchup','Salmon','Leek','Sauce, cream','Tomato, raw ','Chicken, wing','Potatoes steamed']
catid_catname = {}
i=0
for (const cat_id of idlist) {
    catid_catname[cat_id]=catlist[i]
    i=i+1
}


function cat_names(img_id) {
    nutritions = {}
    cat_ids = img_cat[img_id]
    cat_nams = []
    for (let i = 0; i < cat_ids.length; i++) {
        cat_nams.push(catid_catname[cat_ids[i]])
    }
    return cat_nams
  } 

function get_img_id() {
    img_val = document.getElementById('imageinput').value
    img_id = img_val.split("\\").at(-1).split('.')[0]

    return parseInt(img_id)
}




function get_nut_data(){
    img_id = get_img_id()
    cats_txt = cat_names(img_id).join()
    document.getElementById('cat-text').innerText ='Category of the food is: '+cats_txt
    document.getElementById('nut-table').style.display='block'
  }
  var loadFile = function(event) {
    document.getElementById('btn').style.display='block'
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };