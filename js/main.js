// Array of Recipe Objects (8 complete recipes, each with its own real photo)
const recipes = [
    {
        title: "Teriyaki Chicken Bowl",
        description: "Sweet and savory chicken over rice with vegetables",
        rating: 4.7,
        reviews: 367,
        prepTime: 15,
        cookTime: 20,
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Asian",
        image: "images/photo-1546069901-eacef0df6022.avif",
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],
        nutrition: { calories: "540 kcal", protein: "42g", carbs: "58g", fat: "14g", fiber: "4g", sodium: "1240mg" },
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        rating: 4.5,
        reviews: 156,
        prepTime: 20,
        cookTime: 35,
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        image: "images/photo-1546069901-ba9599a7e63c.avif",
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red cabbage, shredded",
            "Edamame & sweet corn",
            "Soft-boiled eggs",
            "Fresh greens",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, cabbage, corn, and eggs.",
            "Drizzle with tahini dressing and serve fresh."
        ],
        nutrition: { calories: "480 kcal", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
    {
        title: "Classic Caesar Salad",
        description: "Crisp romaine lettuce with parmesan, golden croutons, and cherry tomatoes",
        rating: 4.6,
        reviews: 245,
        prepTime: 15,
        cookTime: 10,
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Italian",
        image: "images/imgi_2_photo-1546793665-c74683f339c1.jpg",
        ingredients: [
            "2 heads romaine lettuce, chopped",
            "1 cup homemade garlic croutons",
            "1/2 cup shaved Parmesan cheese",
            "1 cup cherry tomatoes, halved",
            "1/3 cup Caesar dressing",
            "Freshly cracked black pepper",
            "1 tablespoon olive oil",
            "Lemon wedges"
        ],
        instructions: [
            "Toss cubed bread with olive oil and bake at 190°C for 10 minutes until golden.",
            "Wash and dry romaine lettuce thoroughly, then chop into bite-sized pieces.",
            "Place lettuce in a large bowl and drizzle with Caesar dressing.",
            "Toss well until every leaf is evenly coated.",
            "Top with cherry tomatoes, shaved Parmesan, and toasted croutons.",
            "Finish with freshly cracked black pepper and serve immediately."
        ],
        nutrition: { calories: "390 kcal", protein: "14g", carbs: "28g", fat: "24g", fiber: "5g", sodium: "620mg" },
        tips: [
            "Dry the lettuce completely so the dressing clings properly",
            "Add croutons right before serving so they stay crunchy",
            "Top with grilled chicken breast for a hearty main meal",
            "Use freshly shaved Parmigiano-Reggiano for best flavor"
        ]
    },
    {
        title: "Shrimp Pad Thai",
        description: "Stir-fried rice noodles with juicy shrimp, bean sprouts, and tangy tamarind sauce",
        rating: 4.8,
        reviews: 430,
        prepTime: 20,
        cookTime: 15,
        servings: "2 people",
        difficulty: "Medium",
        cuisine: "Thai",
        image: "images/photo-1559314809-0d155014e29e.avif",
        ingredients: [
            "200g flat rice noodles",
            "250g large shrimp, peeled",
            "2 eggs, lightly beaten",
            "1 cup fresh bean sprouts",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "2 tablespoons palm sugar",
            "Green onions & crushed peanuts"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes until pliable, then drain.",
            "Whisk tamarind paste, fish sauce, and palm sugar together in a small bowl.",
            "Sear shrimp in a hot wok for 2 minutes per side, then push aside.",
            "Scramble eggs in the wok, then add noodles and sauce.",
            "Toss continuously over high heat for 3 minutes until noodles absorb the sauce.",
            "Fold in bean sprouts and green onions; serve with crushed peanuts."
        ],
        nutrition: { calories: "510 kcal", protein: "31g", carbs: "64g", fat: "14g", fiber: "3g", sodium: "1180mg" },
        tips: [
            "Do not boil the noodles—soaking keeps them from turning mushy",
            "Have all ingredients prepped before turning on the wok",
            "Adjust sweet, sour, and salty balance to taste",
            "Serve with fresh lime wedges on the side"
        ]
    },
    {
        title: "Thai Red Curry",
        description: "Aromatic coconut red curry with tender vegetables, Thai basil, and chilies",
        rating: 4.8,
        reviews: 289,
        prepTime: 15,
        cookTime: 25,
        servings: "3 people",
        difficulty: "Easy",
        cuisine: "Thai",
        image: "images/photo-1455619452474-d2be8b1e70cd.avif",
        ingredients: [
            "2 tablespoons Thai red curry paste",
            "1 can (400ml) coconut milk",
            "300g chicken or tofu, cubed",
            "1 red bell pepper, sliced",
            "1 cup green beans, trimmed",
            "1 tablespoon fish sauce",
            "1 teaspoon brown sugar",
            "Fresh Thai basil leaves"
        ],
        instructions: [
            "Simmer thick coconut cream in a pot and fry red curry paste for 2 minutes.",
            "Add protein and stir until coated in the fragrant curry paste.",
            "Pour in remaining coconut milk and bring to a gentle simmer.",
            "Add bell peppers and green beans, cooking for 10 minutes until tender.",
            "Season with fish sauce and brown sugar.",
            "Garnish with fresh Thai basil and serve with jasmine rice."
        ],
        nutrition: { calories: "460 kcal", protein: "24g", carbs: "18g", fat: "32g", fiber: "4g", sodium: "910mg" },
        tips: [
            "Use full-fat coconut milk for a rich, velvety curry",
            "Tear basil leaves just before serving for maximum aroma",
            "Adjust spice level by adding more or less curry paste",
            "Leftovers taste even better the next day"
        ]
    },
    {
        title: "Roasted Tomato Herb Soup",
        description: "Velvety roasted tomato soup topped with cream swirl, pumpkin seeds, and herbs",
        rating: 4.6,
        reviews: 198,
        prepTime: 15,
        cookTime: 35,
        servings: "4 people",
        difficulty: "Easy",
        cuisine: "Comfort",
        image: "images/photo-1547592166-23ac45744acd.avif",
        ingredients: [
            "1kg ripe tomatoes, halved",
            "1 onion & 4 garlic cloves",
            "2 cups vegetable broth",
            "1/4 cup heavy cream",
            "2 tablespoons olive oil",
            "2 tablespoons pumpkin seeds",
            "Fresh parsley & basil",
            "Salt and black pepper"
        ],
        instructions: [
            "Toss tomatoes, onion, and garlic with olive oil, salt, and pepper on a tray.",
            "Roast at 200°C for 25 minutes until caramelized.",
            "Transfer roasted vegetables to a pot with broth and simmer 10 minutes.",
            "Blend until completely smooth using an immersion blender.",
            "Ladle into bowls and swirl in heavy cream.",
            "Top with toasted pumpkin seeds and fresh herbs."
        ],
        nutrition: { calories: "280 kcal", protein: "7g", carbs: "24g", fat: "18g", fiber: "5g", sodium: "640mg" },
        tips: [
            "Roasting the tomatoes deepens their natural sweetness",
            "Pair with a crispy grilled cheese sandwich",
            "Swap heavy cream for coconut milk for a dairy-free version",
            "Toast pumpkin seeds lightly for extra crunch"
        ]
    },
    {
        title: "Garlic Herb Roast Beef",
        description: "Juicy slow-roasted beef tenderloin with caramelized crust and pan jus",
        rating: 4.9,
        reviews: 312,
        prepTime: 20,
        cookTime: 35,
        servings: "4 people",
        difficulty: "Medium",
        cuisine: "Steakhouse",
        image: "images/photo-1529692236671-f1f6cf9683ba.avif",
        ingredients: [
            "800g beef roast or sirloin",
            "4 cloves garlic, minced",
            "2 tablespoons butter, softened",
            "1 tablespoon fresh rosemary, chopped",
            "1 tablespoon olive oil",
            "1/2 cup beef broth",
            "Coarse sea salt",
            "Cracked black pepper"
        ],
        instructions: [
            "Bring beef to room temperature and season generously with salt and pepper.",
            "Sear in a hot oven-safe skillet with olive oil until browned on all sides.",
            "Rub with garlic herb butter and transfer to a 190°C oven.",
            "Roast for 25–30 minutes until internal temperature reaches 55°C.",
            "Rest beef on a wooden board for 10 minutes before slicing.",
            "Deglaze pan with beef broth for a quick jus and drizzle over slices."
        ],
        nutrition: { calories: "580 kcal", protein: "48g", carbs: "2g", fat: "41g", fiber: "0g", sodium: "780mg" },
        tips: [
            "Always let the roast rest before slicing to keep juices inside",
            "Use a meat thermometer for perfect medium-rare doneness",
            "Slice against the grain for maximum tenderness",
            "Serve with roasted potatoes or steamed asparagus"
        ]
    },
    {
        title: "Chicken Tikka Masala",
        description: "Tender spiced chicken simmered in creamy tomato masala sauce with warm naan",
        rating: 4.9,
        reviews: 504,
        prepTime: 25,
        cookTime: 30,
        servings: "3 people",
        difficulty: "Medium",
        cuisine: "Indian",
        image: "images/photo-1565557623262-b51c2513a641.avif",
        ingredients: [
            "500g chicken breast, cubed",
            "1/2 cup plain yogurt",
            "1 can crushed tomatoes",
            "1/2 cup heavy cream",
            "2 tablespoons garam masala",
            "1 tablespoon ginger-garlic paste",
            "Fresh cilantro, chopped",
            "Warm garlic naan bread"
        ],
        instructions: [
            "Marinate chicken in yogurt, half the garam masala, and ginger-garlic paste.",
            "Sear marinated chicken in a hot skillet until lightly charred, then set aside.",
            "In the same pan, simmer crushed tomatoes with remaining spices for 10 minutes.",
            "Stir in heavy cream until the sauce turns rich and velvety.",
            "Add chicken back in and simmer for 8 minutes until cooked through.",
            "Garnish with fresh cilantro and serve with warm garlic naan."
        ],
        nutrition: { calories: "610 kcal", protein: "44g", carbs: "42g", fat: "28g", fiber: "4g", sodium: "960mg" },
        tips: [
            "Marinate chicken for at least 30 minutes for deeper flavor",
            "Toast whole spices briefly before grinding if making from scratch",
            "Brush warm naan with melted butter before serving",
            "Add a pinch of cayenne if you prefer extra heat"
        ]
    }
];

let currentIndex = 0;

// Select a random recipe index different from the current one
function getRandomRecipeIndex() {
    if (recipes.length <= 1) return 0;
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * recipes.length);
    } while (nextIndex === currentIndex);
    return nextIndex;
}

// Render a recipe object into the DOM
function renderRecipe(recipe) {
    document.getElementById("recipe-img").src = recipe.image;
    document.getElementById("recipe-img").alt = recipe.title;
    document.getElementById("recipe-rating").textContent = recipe.rating;
    document.getElementById("recipe-reviews").textContent = `(${recipe.reviews} reviews)`;
    document.getElementById("prep-time").textContent = `${recipe.prepTime} min`;
    document.getElementById("cook-time").textContent = `${recipe.cookTime} min`;
    document.getElementById("servings").textContent = recipe.servings;
    document.getElementById("badge-difficulty").textContent = recipe.difficulty;
    document.getElementById("badge-cuisine").textContent = recipe.cuisine;
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-desc").textContent = recipe.description;

    // Conditional Extended Preparation Time warning (> 45 mins)
    const totalMinutes = recipe.prepTime + recipe.cookTime;
    const warningEl = document.getElementById("time-warning");
    if (totalMinutes > 45) {
        warningEl.classList.add("visible");
    } else {
        warningEl.classList.remove("visible");
    }

    // Ingredients
    const ingList = document.getElementById("ingredients-list");
    ingList.innerHTML = recipe.ingredients
        .map((item, idx) => `<li class="ingredient-item"><span class="ing-num">${idx + 1}</span><span>${item}</span></li>`)
        .join("");

    // Instructions
    const instList = document.getElementById("instructions-list");
    instList.innerHTML = recipe.instructions
        .map((step, idx) => `<li class="instruction-item"><span class="step-box">${idx + 1}</span><span>${step}</span></li>`)
        .join("");

    // Nutrition
    document.getElementById("nut-calories").textContent = recipe.nutrition.calories;
    document.getElementById("nut-protein").textContent = recipe.nutrition.protein;
    document.getElementById("nut-carbs").textContent = recipe.nutrition.carbs;
    document.getElementById("nut-fat").textContent = recipe.nutrition.fat;
    document.getElementById("nut-fiber").textContent = recipe.nutrition.fiber;
    document.getElementById("nut-sodium").textContent = recipe.nutrition.sodium;

    // Chef's Tips
    const tipsList = document.getElementById("tips-list");
    tipsList.innerHTML = recipe.tips
        .map(tip => `<div class="tip-card"><i class="fa-solid fa-circle-check"></i><span>${tip}</span></div>`)
        .join("");
}

// Tab switching logic
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab");
        tabButtons.forEach(b => b.classList.remove("active"));
        tabPanels.forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
});

// Try Another Recipe button
document.getElementById("try-another-btn").addEventListener("click", () => {
    currentIndex = getRandomRecipeIndex();
    renderRecipe(recipes[currentIndex]);
});

// Initial render
renderRecipe(recipes[0]);
