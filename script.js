let users = [
    {
      profilePic: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: 4,
      location: "Indor, India",
      name: "Apsara",
      age: 23,
      interests: [{
          icon: `<i class="ri-music-2-fill"></i>`,
          interest:"Music"
      }],
      bio:"Patel Ji",
      isFriend: null,
    },
    {
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: 2,
      location: "Indor, India",
      name: "Apsara 2",
      age: 22,
      interests: [{
          icon: `<i class="ri-music-2-fill"></i>`,
          interest:"Music"
      }],
      bio:"Patel Ji",
      isFriend: null,
    },
    {
      profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: 6,
      location: "Kasmir, India",
      name: "Apsara 3",
      age: 26,
      interests: [{
          icon: `<i class="ri-music-2-fill"></i>`,
          interest:"Music"
      }],
      bio:"Patel Ji",
      isFriend: null,
    },
    {
      profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: 3,
      location: "Shimla, India",
      name: "Apsara 4",
      age: 21,
      interests: [{
          icon: `<i class="ri-music-2-fill"></i>`,
          interest:"Music"
      }],
      bio:"Patel Ji",
      isFriend: null,
    },
  ];
  
  function select(elem) {
    return document.querySelector(elem);
  }
  
  
  
  
  let curr = 0;
  let isAnimating = false;
  
  function setData(index) {
    if (index >= 0 && index < users.length) {
        isAnimating = true;

        select(".maincard img").src = users[index].displayPic;
        select(".incomingcard img").src = users[index]?.displayPic;
        
        select(".prflimg img").src = users[index].profilePic;
        select(".badge h5").textContent = users[index].pendingMessage;
        select(".location h3").textContent = users[index].location;
        select(".name h1:nth-child(1)").textContent = users[index].name;
        select(".name h1:nth-child(2)").textContent = users[index].age;

        let clutter = "";

        users[index].interests.forEach(function(interest) {
            clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 gap-3">
                            ${interest.icon}
                            <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                        </div>`;
        });

        select(".tags").innerHTML = clutter;

        select(".bio p").textContent = users[index].bio;
        
        curr = index; // Update the current index
    } else {
        console.error("Index out of range or invalid.");
    }
}

  
  (function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;
    
    select(".prflimg img").src = users[curr].profilePic;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;
    
  
    let clutter = "";
  
    users[curr].interests.forEach(function(interest) {
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 gap-3">
                    <span class="math-inline">\{interest\.icon\}</span>  <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                  </div>`;
      });
      
  
    select(".tags").innerHTML = clutter;
  
    select(".bio p").textContent = users[curr].bio;
  
    setData(curr); // Call setData with initial curr value
    curr = 2;
  })();
  
  function imagChange() {
    if(!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
          onComplete: function() {
     
            let main = select(".maincard");
            let incoming = select(".incomingcard");
     
            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");
     
            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main, {  // Fix typo: main instead of mian
              scale: 1,
              opacity: 1
            });
            curr++;
            if(curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
          }
        });
  
        tl.to(".maincard", {
          scale: 1.1,
          opacity: 0,
          ease: Circ,
          duration: 0.9
        }, "start");
  
        tl.to(".incomingcard", {
          scale: 0.9,
          opacity: 0,
          ease: Circ,
          duration: 1.1
        }, "start");
      }
  }
  
  let deny = select(".deny");
  let accept = select(".accept");
  
  deny.addEventListener("click", function() {
    imagChange();
    setData(curr - 1); // Corrected typo (space added)
    gsap.from(".details .element", {
      y: "100%",
      stagger: 0.06,
      ease: Power4.easeInOut,
      duration: 1.5
    });
  });
  
  
  accept.addEventListener("click", function() {
      imagChange();
      setData(curr - 1);
      gsap.from(".details .element", {
          y: "100%",
          stagger: 0.06,
          ease: Power4.easeInOut,
          duration: 1.5
      });
  });
  
  (function containerCreator() {
      document.querySelectorAll(".element").forEach(function (element) {
          let div = document.createElement("div");
          div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
          div.appendChild(element);
          select(".details").appendChild(div);
      });
  })();
