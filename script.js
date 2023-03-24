const typed = new Typed(".brand", {
  strings: ["Welcome to", "Catstagram"],
  typeSpeed: 150,
  backSpeed: 150,
  smartBackspace: true,
  fadeOutDelay: 100,
  loop: true,
});

const bodyClass = document.querySelector(".body");

const catNames = [
  {
    name: "Luna",
    hebit1: "She likes meat",
    habit2: "She has 3 children",
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "luna.html",
  },
  {
    name: "Max",
    habit1: "She likes bone",
    habit2: "She has 2 children",
    url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "max.html",
  },
  {
    name: "Charlie",
    habit1: "She likes fish",
    habit2: "She has 2 brother",
    url: "https://plus.unsplash.com/premium_photo-1667030489905-d8e6309ebe0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "charlie.html",
  },
  {
    name: "Lucy",
    habit1: "She likes cracker",
    habit2: "She lisves with her parents",
    url: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "lucy.html",
  },
  {
    name: "Tiger",
    habit1: "She likes milk",
    habit2: "We also call Pusi",
    url: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "tiger.html",
  },
  {
    name: "Whiskers",
    habit1: "She likes chicken",
    habit2: "She has beautiful eyes",
    url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "whiskers.html",
  },
  {
    name: "Bella",
    habit1: "She likes beef",
    habit2: "She is good for us",
    url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "bella.html",
  },

  {
    name: "Luna",
    hebit1: "She likes meat",
    habit2: "She has 3 children",
    url: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "luna.html",
  },
  {
    name: "Max",
    habit1: "She likes bone",
    habit2: "She has 2 children",
    url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "max.html",
  },
  {
    name: "Charlie",
    habit1: "She likes fish",
    habit2: "She has 2 brother",
    url: "https://media.istockphoto.com/id/1361306507/photo/funny-cat-looking-shocked-with-mouth-open.jpg?b=1&s=170667a&w=0&k=20&c=Uisem9IETWVwUcv7lWUUYD3sN194xifoUQniFwH5WDI=",
    moreUrl: "charlie.html",
  },
  {
    name: "Lucy",
    habit1: "She likes cracker",
    habit2: "She lisves with her parents",
    url: "https://media.istockphoto.com/id/1453786554/photo/beautiful-maine-coon-cat-on-an-examination-table-at-the-vet.jpg?b=1&s=170667a&w=0&k=20&c=Lfp9ydr_Ad85WwaowsgJjNWVgOk1lTHcov_3e4YjOT0=",
    moreUrl: "lucy.html",
  },
  {
    name: "Tiger",
    habit1: "She likes milk",
    habit2: "We also call Pusi",
    url: "https://media.istockphoto.com/id/1298824982/photo/a-happy-long-haired-brown-tabby-cat-is-relaxing-on-a-felt-cat-bed-at-home-holding-his-paws.jpg?b=1&s=170667a&w=0&k=20&c=ZnJdiwVoL9TqBMXN2cKugS6RiDaUrpKG4yMyTwkWWFk=",
    moreUrl: "tiger.html",
  },
  {
    name: "Whiskers",
    habit1: "She likes chicken",
    habit2: "She has beautiful eyes",
    url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "whiskers.html",
  },
  {
    name: "Bella",
    habit1: "She likes beef",
    habit2: "She is good for us",
    url: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    moreUrl: "bella.html",
  },
];

for (let i = 0; i < catNames.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  const info = document.createElement("div");
  info.classList.add("info");
  const name = document.createElement("div");
  name.classList.add("name");
  name.innerText = `${catNames[i].name}`;
  const habit = document.createElement("div");
  habit.classList.add("habit");
  habit.innerHTML = `<ul>
  <li>${catNames[i].habit1}</li>
  <li>${catNames[i].habit2}</li>
</ul>`;
  const photo = document.createElement("div");
  photo.classList.add("photo");
  photo.style.backgroundImage = `url("${catNames[i].url}")`;

  const moreBtn = document.createElement("a");
  moreBtn.classList.add("moreBtn");
  moreBtn.href = `${catNames[i].moreUrl}`;
  moreBtn.innerText = "More";
  info.append(name, habit, moreBtn);
  card.append(info, photo);
  bodyClass.append(card);
}
