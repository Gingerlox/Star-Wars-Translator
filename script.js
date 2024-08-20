let two = document.getElementById("two");
document.getElementById("one").addEventListener("input", function(){
  two.value = this.value;
});