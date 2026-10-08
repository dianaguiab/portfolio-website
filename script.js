(function(){
  // Skills render
  var L=['','Beginner','Intermediate','Advanced'];
  document.querySelectorAll('.skill').forEach(function(c){
    var n=+c.dataset.level,b='';
    for(var i=1;i<=3;i++)b+='<i class="'+(i<=n?'on':'')+'"></i>';
    c.innerHTML='<div class="top"><h3>'+c.dataset.name+'</h3><span class="badge mono">'+L[n]+'</span></div><div class="bar" role="img" aria-label="'+L[n]+'">'+b+'</div>';
  });
  // Profile picture: if an image src is set it replaces the placeholder
  var img=document.getElementById('picimg');
  if(img.getAttribute('src')){img.style.display='block';document.getElementById('picph').style.display='none'}
  // Nav
  var links=document.getElementById('links'),bg=document.getElementById('burger');
  bg.onclick=function(){var o=links.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
  links.onclick=function(e){if(e.target.tagName==='A')links.classList.remove('open')};
  var secs=[].slice.call(document.querySelectorAll('section')),as=[].slice.call(links.querySelectorAll('a'));
  function spy(){var y=window.scrollY+140,cur=secs[0].id;secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});as.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})}
  window.addEventListener('scroll',spy,{passive:true});spy();
  // Intro boot sequence
  var lines=['> INITIALIZING PROFILE...','> LOADING USER DATA...','> WELCOME!'],boot=document.getElementById('boot'),intro=document.getElementById('intro'),closed=false;
  function close(){if(closed)return;closed=true;intro.classList.add('done');setTimeout(function(){intro.style.display='none'},1000)}
  lines.forEach(function(t,i){setTimeout(function(){var d=document.createElement('div');d.textContent=t;boot.appendChild(d)},500+i*900)});
  setTimeout(close,3900);
  document.getElementById('skip').onclick=close;
})();
