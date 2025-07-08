const savageData = [
  {
    quote: "mai apni favourite hu.",
    author: "Geet – Jab We Met"
  },
  {
    quote: "chal red flag.",
    author: "Nikki's Burn Book"
  },
  {
    quote: "Bhai tu single nahi hai, tu bewkoof hai!",
    author: "Bagga – College Romance"
  },
  {
    quote: "I'm not a hero. I'm a high-functioning lunatic.",
    author: "Deadpool"
  },
  {
    quote: "Main woh vibe hoon jo har kisi ko feel nahi hoti.",
    author: "Underrated Legend"
  },
  {
    quote: "Tumhara attitude 90s ke ringtone ki tarah outdated hai.",
    author: "Sassy Queen"
  },
  {
    quote: "teri height ke sath sath teri soch bhi choti h.",
    author: "Unknown"
  },
  {
    quote: "Beee chal hata sawan ki ghata.",
    author: "Badtameez Swag"
  },
  {
    quote: "Don’t confuse my kindness for weakness.",
    author: "Ko Moon-young – It's Okay to Not Be Okay (K-Drama)"
  },
  {
    quote: "You can’t fix yourself by breaking someone else.",
    author: "Kim Soo-hyun – It's Okay to Not Be Okay (K-Drama)"
  },
  {
    quote: "I never asked to be saved.",
    author: "Yoon Ji-ho – Because This is My First Life (K-Drama)"
  },
  {
    quote: "Being alone is better than being with the wrong person.",
    author: "Han Ji-pyeong – Start-Up (K-Drama)"
  },
  {
    quote: "If you like someone, just tell them. Don’t waste time.",
    author: "Cheon Song-yi – My Love From the Star (K-Drama)"
  },
  {
    quote: "A true king is born from pain and betrayal.",
    author: "Yi San – The Red Sleeve (K-Drama)"
  },
  {
    quote: "Even a genius needs hard work to succeed.",
    author: "Wei Wuxian – The Untamed (C-Drama)"
  },
  {
    quote: "I do what I want, not what others expect.",
    author: "Feng Jiu – Eternal Love (C-Drama)"
  },
  {
    quote: "You think I'm reckless? I just don’t fear failure.",
    author: "Zhao Yao – The Legends (C-Drama)"
  },
  {
    quote: "I’d rather be alone than live with lies.",
    author: "Dongfang Qingcang – Love Between Fairy and Devil (C-Drama)"
  },
  {
    quote: "Your vibe attracts your tribe. That’s why clowns stick together.",
    author: "Savage Universe"
  },
  {
    quote: "I’m not cold. I just don’t entertain stupidity.",
    author: "Ice Queen"
  },
  {
    quote: "Be a voice, not an echo.",
    author: "Rising Rebel"
  },
  {
    quote: "I’m not ignoring you, I’m just prioritizing my peace.",
    author: "Zen Savage"
  },
  {
    quote: "You couldn’t handle me even if I came with instructions.",
    author: "Boss Energy"
  },
  {
    quote: "Sweetheart, I’m the storm you were warned about.",
    author: "Untamed Soul"
  },
  {
    quote: "Your opinion wasn’t in my to-do list today.",
    author: "Mood 24/7"
  },
  {
    quote: "I don’t hold grudges, I just remember facts.",
    author: "Quiet Assassin"
  },
  {
    quote: "I love rumors. I always find out amazing things about myself I never knew!",
    author: "Savage Sass"
  },
  {
    quote: "No response is a response. And it's a powerful one.",
    author: "Silent Slay"
  }
];

function generateSavage() {
  const index = Math.floor(Math.random() * savageData.length);
  const current = savageData[index];

  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  if (quote && author) {
    quote.classList.remove("fade-in");
    void quote.offsetWidth;
    quote.classList.add("fade-in");

    quote.innerText = `"${current.quote}"`;
    author.innerText = `— ${current.author}`;
  }
}

window.onload = generateSavage;
