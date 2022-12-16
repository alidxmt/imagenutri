image_id = ''
eve = ''
img_cat = {6331:[1184],
    6346:[1013, 1849, 1572, 1040, 2734],
    6483:[1967, 1113, 2730, 1069],
    6497:[1791, 1010]}
idlist = [1184,1013, 1849, 1572, 1040, 2734,1967, 1113, 2730, 1069,1791, 1010]
//catlist = ['sugar melon','chips, french fries','hamburger','hamburger bun','halad, leaf / salad, green','hetchup','halmon','leek','sauce, cream','tomato, raw ','chicken, wing','potatoes steamed']
catlist = ['melon', 'potato', 'hamburger meat', 'hamburger bun', 'salad', 'ketchup', 'salmon', 'leek', 'sauce', 'tomato', 'chicken wing', 'potato']

nutrs_json = JSON.parse('{"6331":[["melon","1  g","0.06  g","0.16  mg","0.0  mg","0.26  kcal","0.01  g","0.0  g "],[" sugar","12  g","11.95  g","0.12  mg","0.0  mg","46.2  kcal","0.0  g","0.0  g"]],"6346":[["hamburger bun","43 g","21.54 g","212.42 mg","0.0 mg","119.97 kcal","0.77 g","0.36 g"],["hamburger meat","85 g","0.0 g","56.95 mg","60.35 mg","215.9 kcal","0.0 g","6.52 g"],["ketchup","15 g","4.11 g","136.05 mg","0.0 mg","15.15 kcal","0.05 g","0.0 g"],["salad","40 g","1.29 g","10.4 mg","0.0 mg","6.4 kcal","","","0.0 g"],["bun","71 g","32.52 g","292.52 mg","0.0 mg","173.24 kcal","1.07 g","0.0 g"]],"6483":[["salmon","170 g","0.0 g","74.8 mg","93.5 mg","241.4 kcal","0.0 g","1.67 g"],["tomato","180 g","7.0 g","9.0 mg","0.0 mg","32.4 kcal","2.16 g","0.05 g"],["sauce","1 g","0.28 g","12.0 mg","0.0 mg","1.22 kcal","0.0 g","0.0 g"],["cream","15 g","0.43 g","4.05 mg","16.95 mg","51.0 kcal","0.0 g","3.45 g"],["leek","1 g","0.14 g","0.2 mg","0.0 mg","0.61 kcal","0.02 g","0.0 g"]],"6497":[["chicken wing","1 g","0.0 g","0.73 mg","0.77 mg","2.22 kcal","0.0 g","0.04 g"],["chicken","108 g","0.0 g","75.94 mg","81.36 mg","233.23 kcal","0.0 g","4.68 g"],["potato","1 g","0.17 g","0.06 mg","0.0 mg","0.77 kcal","0.02 g","0.0 g"]]}')

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
    nut_str = ''
    //for (const ca in cat_names(img_id)) {nut_str += nutrs_json[ca].join('|')}
    document.getElementById('cat-text').innerText ='Category of the food is: '+cats_txt
    document.getElementById('nut-table').style.display='block'
    document.getElementById('nut-table').innerHTML = tab_inner;
    for (vas of nutr_json[img_id]) {change_table(vas)}
    
    
  }
  var loadFile = function(event) {
    document.getElementById('btn').style.display='block'
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
tab_inner = '<tr><th>name</th><th>serving size</th><th>calories</th><th>total fat</th><th>saturated fat</th><th>cholesterol</th><th>sodium</th><th>choline</th></tr>'
//nutrs_json = JSON.parse('{"header":["","name","amount","unit","carbohydrates_amount","carbohydratesunit","sodium_amount","sodiumunit","cholesterol_amount","cholesterolunit","calories_amount","caloriesunit","fiber_amount","fiberunit","saturated fat_amount","saturated fatunit"],"hamburger bun":["0","hamburger bun","43 g","21.54 g","212.42 mg","0.0 mg","119.97 kcal","0.77 g","0.36 g"],"chicken wing":["1","chicken wing","1 g","0.0 g","0.73 mg","0.77 mg","2.22 kcal","0.0 g","0.04 g"],"hamburger meat":["2","hamburger meat","85 g","0.0 g","56.95 mg","60.35 mg","215.9 kcal","0.0 g","6.52 g"],"chicken":["3","chicken","108 g","0.0 g","75.94 mg","81.36 mg","233.23 kcal","0.0 g","4.68 g"],"ketchup":["4","ketchup","15 g","4.11 g","136.05 mg","0.0 mg","15.15 kcal","0.05 g","0.0 g"],"salmon":["5","salmon","170 g","0.0 g","74.8 mg","93.5 mg","241.4 kcal","0.0 g","1.67 g"],"potato":["6","potato","1 g","0.17 g","0.06 mg","0.0 mg","0.77 kcal","0.02 g","0.0 g"],"tomato":["7","tomato","180 g","7.0 g","9.0 mg","0.0 mg","32.4 kcal","2.16 g","0.05 g"],"salad":["8","salad","40 g","1.29 g","10.4 mg","0.0 mg","6.4 kcal","","","0.0 g"],"melon":["9","melon","1 g","0.06 g","0.16 mg","0.0 mg","0.26 kcal","0.01 g","0.0 g"],"sugar":["10","sugar","12 g","11.95 g","0.12 mg","0.0 mg","46.2 kcal","0.0 g","0.0 g"],"sauce":["11","sauce","1 g","0.28 g","12.0 mg","0.0 mg","1.22 kcal","0.0 g","0.0 g"],"cream":["12","cream","15 g","0.43 g","4.05 mg","16.95 mg","51.0 kcal","0.0 g","3.45 g"],"leek":["13","leek","1 g","0.14 g","0.2 mg","0.0 mg","0.61 kcal","0.02 g","0.0 g"],"bun":["14","bun","71 g","32.52 g","292.52 mg","0.0 mg","173.24 kcal","1.07 g","0.0 g"],"undefined":[""],"Sugar Melon":["9","melon","1 g","0.06 g","0.16 mg","0.0 mg","0.26 kcal","0.01 g","0.0 g"],"Chicken, wing":["1","chicken wing","1 g","0.0 g","0.73 mg","0.77 mg","2.22 kcal","0.0 g","0.04 g"],"Chips, french fries":["6","potato","1 g","0.17 g","0.06 mg","0.0 mg","0.77 kcal","0.02 g","0.0 g"],"Salad, leaf / salad":["8","salad","40 g","1.29 g","10.4 mg","0.0 mg","6.4 kcal","","","0.0 g"],"Sauce, cream":["11","sauce","1 g","0.28 g","12.0 mg","0.0 mg","1.22 kcal","0.0 g","0.0 g"],"Tomato, raw ":["7","tomato","180 g","7.0 g","9.0 mg","0.0 mg","32.4 kcal","2.16 g","0.05 g"]}')
function change_table(vas) {
ihn = '<tr><td>-name</td><td>-serving_size</td><td>-calories</td><td>-total_fat</td><td>-saturated_fat</td><td>-cholesterol</td><td>-sodium</td><td>-choline</td></tr>'
vas.forEach((_va, index) => {console.log(inh)
  const _st = x[index];
  console.log(_va, _st);
inh= inh.replace(_va,_st)
});
document.getElementById('nut-table').innerHTML += inh
    
}    

