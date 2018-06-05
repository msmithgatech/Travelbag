
function printChecked(){
    var items=document.getElementsByName('sel');
    var selectedItems="";
    var toiletries = ["hair products"];
    var clothes = ["casual clothes","dress clothes", "underwear", "nightwear" ,"socks", "shoes"];
    var electronics = ["smartphone and charger", "laptop and charger", "tablet and charger", "kindle and charger", "bluetooth and charger"];
    var outerwear = ["coat", "jacket", "sweater", "scarf", "gloves"];
    var other = ["entertainment", "jewelry"];
 
for(var i=0; i<items.length; i++){
            if(items[i].type=='checkbox' && items[i].checked==true)
                selectedItems+=items[i].value+"\n";
                selectedItems+=toiletries[0]+"\n";
                selectedItems+=clothes[0]+"\n";
                selectedItems+=electronics[0]+"\n";
                selectedItems+=outerwear[0]+"\n";
                selectedItems+=other[0]+"\n";

    }
    
    alert(selectedItems);
    //alert(electronics);
}
