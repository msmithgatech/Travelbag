var list = document.createElement('input', 'checkbox-list');

var all = document.createElement('input');
all.setAttribute('type', 'checkbox');
all.setAttribute('checkbox-list-all', 'true');

var checking = document.createElement('input');
checking.setAttribute('type', 'checkbox');

var saving = document.createElement('input');
saving.setAttribute('type', 'checkbox');

list.appendChild(all);
list.appendChild(checking);
list.appendChild(saving);

document.body.appendChild(list);