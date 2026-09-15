document.querySelectorAll('.filter').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    document.querySelectorAll('.t-card').forEach(card=>{
      card.classList.toggle('hidden', filter!=='all' && card.dataset.type!==filter);
    });
  });
});

// Friendly placeholder check for the APK.
// Replace app/Clash24.apk with your real APK before publishing.
document.querySelectorAll('a[href="app/Clash24.apk"]').forEach(link=>{
  link.addEventListener('click', e=>{
    // If the APK has not been uploaded yet, explain what to do.
    // Remove this block after placing the real APK if desired.
    fetch('app/Clash24.apk', {method:'HEAD'}).catch(()=>{
      e.preventDefault();
      alert('Clash24 APK abhi upload nahi ki gayi hai. app folder me Clash24.apk rakhiye.');
    });
  });
});
