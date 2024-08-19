function canCopyFunc() {
   $('#content_views pre code').css('user-select', 'auto');
  $('#content_views pre').css('user-select', 'auto');
  
  $('.article_content').off('copy');
  $('#content_views').off('copy');
  
  console.log('off copy');
}

	
console.log('hello...world...,I am from ',location.href);
canCopyFunc();

