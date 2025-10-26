const response = await fetch(`${import.meta.env.VITE_API_URL}/api/generate`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name,
    email,
    phone,
    education,
    skills,
    experience
  }),
});

const data = await response.json();
console.log(data);
