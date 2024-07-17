var nav=document.querySelector(".nav"),navBtn=document.querySelector(".burger-btn"),allNavItems=document.querySelectorAll(".nav__item"),handleNav=function(){nav.classList.toggle("nav--active"),allNavItems.forEach(function(e){e.addEventListener("click",function(){nav.classList.remove("nav--active")})}),handleNavItemsAnimation()},handleNavItemsAnimation=function(){var n=0;allNavItems.forEach(function(e){e.classList.toggle("nav-items-animation"),e.style.animationDelay="."+n+"s",n++})};navBtn.addEventListener("click",handleNav),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&(document.querySelector(".hero-img").style.backgroundAttachment="scroll");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2QnRuIiwiYWxsTmF2SXRlbXMiLCJoYW5kbGVOYXYiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoYW5kbGVOYXZJdGVtc0FuaW1hdGlvbiIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJkZWxheVRpbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwid2luZG93IiwiTVNTdHJlYW0iLCJiYWNrZ3JvdW5kQXR0YWNobWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBTUMsU0FBU0MsY0FBYyxNQUFNLEVBQ25DQyxPQUFTRixTQUFTQyxjQUFjLGFBQWEsRUFEN0NGLFlBQWVFLFNBQUFBLGlCQUFxQixZQUFBLEVBRXBDRSxVQUFjSCxXQUVwQkQsSUFBTUssVUFBU0MsT0FBRyxhQUFILEVBR2RGLFlBQVdHLFFBQVEsU0FBQ0MsR0FDbkJBLEVBQUFBLGlCQUFLQyxRQUF3QixXQUM1QlQsSUFBQUEsVUFBSVUsT0FBVUMsYUFBTyxDQUN0QixDQUFDLENBQ0YsQ0FBQSxFQUdBQyx3QkFBQSxDQUVELEVBRUNSLHdCQUFxQkksV0FEckIsSUFFQ0EsRUFBS0UsRUFETk4sWUFFTVMsUUFBTUMsU0FBQUEsR0FEWE4sRUFFQU8sVUFBV1QsT0FBQSxxQkFBQSxFQUNaRSxFQUFFSyxNQUFBQyxlQUFBLElBQUFDLEVBQUEsSUFDRkEsQ0FBQSxFQUVEWixDQUFBQSxDQUVBLEVBRUFBLE9BQUFNLGlCQUFBLFFBQUFKLFNBQUEsRUFGSSxtQkFBbUJXLEtBQUtDLFVBQVVDLFNBQVMsR0FBSyxDQUFDQyxPQUFPQyxXQUN4RG5CLFNBQVNDLGNBQWMsV0FBVyxFQUFFVyxNQUFNUSxxQkFBdUIiLCJmaWxlIjoibWFpbl9taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItYnRuXCIpO1xyXG5jb25zdCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19pdGVtXCIpO1xyXG5cclxuY29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xyXG5cdG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LS1hY3RpdmVcIik7XHJcblxyXG5cdGFsbE5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtLWFjdGl2ZVwiKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRoYW5kbGVOYXZJdGVtc0FuaW1hdGlvbigpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlTmF2SXRlbXNBbmltYXRpb24gPSAoKSA9PiB7XHJcblx0bGV0IGRlbGF5VGltZSA9IDA7XHJcblx0YWxsTmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWl0ZW1zLWFuaW1hdGlvblwiKTtcclxuXHRcdGl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBcIi5cIiArIGRlbGF5VGltZSArIFwic1wiO1xyXG5cdFx0ZGVsYXlUaW1lKys7XHJcblx0fSk7XHJcbn07XHJcblxyXG5uYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5hdik7XHJcblxyXG5pZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8taW1nJykuc3R5bGUuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSAnc2Nyb2xsJztcclxufSJdfQ==
