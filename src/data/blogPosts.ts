
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Heart Health',
    excerpt: 'Learn how to keep your heart healthy with these simple lifestyle changes and medical recommendations.',
    content: `
      <h2>Introduction</h2>
      <p>Heart disease remains one of the leading causes of death worldwide, but the good news is that many heart conditions are preventable through lifestyle modifications and proper medical care. In this comprehensive guide, we'll explore ten essential tips that can help you maintain optimal heart health throughout your life.</p>
      
      <h2>1. Maintain a Balanced Diet</h2>
      <p>A heart-healthy diet is rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, excessive sodium, and saturated fats. The Mediterranean diet has been shown to be particularly beneficial for heart health.</p>
      
      <h2>2. Exercise Regularly</h2>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Regular exercise strengthens your heart muscle and improves circulation.</p>
      
      <h2>3. Manage Stress</h2>
      <p>Chronic stress can contribute to heart disease. Practice stress-reduction techniques such as meditation, deep breathing, yoga, or engaging in hobbies you enjoy.</p>
      
      <h2>4. Get Quality Sleep</h2>
      <p>Adults should aim for 7-9 hours of quality sleep per night. Poor sleep patterns have been linked to increased risk of heart disease, high blood pressure, and stroke.</p>
      
      <h2>5. Don't Smoke</h2>
      <p>Smoking damages blood vessels and significantly increases your risk of heart disease. If you smoke, quitting is one of the best things you can do for your heart health.</p>
      
      <h2>Conclusion</h2>
      <p>By incorporating these tips into your daily routine, you can significantly reduce your risk of heart disease and improve your overall cardiovascular health. Remember to consult with your healthcare provider before making significant changes to your lifestyle or starting a new exercise program.</p>
    `,
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Cardiology'
  },
  {
    id: '2',
    title: 'Understanding Mental Health: Breaking the Stigma',
    excerpt: 'Mental health is just as important as physical health. Learn about common mental health conditions and treatment options.',
    content: `
      <h2>The Importance of Mental Health</h2>
      <p>Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act, and it determines how we handle stress, relate to others, and make choices.</p>
      
      <h2>Common Mental Health Conditions</h2>
      <p>Mental health conditions are common and treatable. Some of the most prevalent include anxiety disorders, depression, bipolar disorder, and post-traumatic stress disorder (PTSD).</p>
      
      <h2>Breaking the Stigma</h2>
      <p>One of the biggest barriers to mental health treatment is stigma. It's important to understand that mental health conditions are medical conditions, just like diabetes or heart disease.</p>
      
      <h2>Treatment Options</h2>
      <p>There are many effective treatments available for mental health conditions, including therapy, medication, lifestyle changes, and support groups. The key is finding the right combination for each individual.</p>
      
      <h2>When to Seek Help</h2>
      <p>If you're experiencing persistent sadness, anxiety, or other mental health symptoms that interfere with your daily life, it's important to seek professional help.</p>
    `,
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Mental Health'
  },
  {
    id: '3',
    title: 'Pediatric Care: What Every Parent Should Know',
    excerpt: 'Essential information for parents about childhood health, development, and when to seek medical attention.',
    content: `
      <h2>The Importance of Regular Check-ups</h2>
      <p>Regular pediatric check-ups are essential for monitoring your child's growth and development, preventing illness, and catching potential health issues early.</p>
      
      <h2>Vaccination Schedule</h2>
      <p>Vaccines are one of the most important ways to protect your child's health. Following the recommended vaccination schedule helps prevent serious diseases.</p>
      
      <h2>Recognizing Warning Signs</h2>
      <p>Learn to recognize when your child needs immediate medical attention, including signs of serious illness and emergency situations.</p>
      
      <h2>Nutrition and Development</h2>
      <p>Proper nutrition is crucial for healthy growth and development. Work with your pediatrician to ensure your child is getting the nutrients they need.</p>
      
      <h2>Building Healthy Habits</h2>
      <p>Start building healthy habits early, including regular exercise, good hygiene, and adequate sleep. These habits will benefit your child throughout their life.</p>
    `,
    author: 'Dr. Emily Davis',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Pediatrics'
  },
  {
    id: '4',
    title: 'Emergency Preparedness: What to Do in Medical Emergencies',
    excerpt: 'Learn how to respond to common medical emergencies and when to call for professional help.',
    content: `
      <h2>Recognizing Medical Emergencies</h2>
      <p>Knowing how to recognize a medical emergency can save lives. Learn the warning signs of heart attack, stroke, severe allergic reactions, and other serious conditions.</p>
      
      <h2>Basic First Aid</h2>
      <p>Everyone should know basic first aid techniques, including CPR, how to stop bleeding, and how to help someone who is choking.</p>
      
      <h2>When to Call 911</h2>
      <p>Don't hesitate to call emergency services if you're unsure whether a situation is an emergency. It's better to be safe than sorry.</p>
      
      <h2>Emergency Kit Essentials</h2>
      <p>Keep a well-stocked first aid kit at home and in your car. Include bandages, antiseptic, medications, and emergency contact information.</p>
      
      <h2>Preparation is Key</h2>
      <p>Take a first aid course, know the location of your nearest emergency room, and keep important medical information easily accessible.</p>
    `,
    author: 'Dr. James Wilson',
    date: '2024-01-01',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Emergency Care'
  },
  {
    id: '5',
    title: 'The Future of Telemedicine',
    excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery and improving patient access to care.',
    content: `
      <h2>What is Telemedicine?</h2>
      <p>Telemedicine uses technology to deliver healthcare services remotely, allowing patients to consult with healthcare providers from the comfort of their homes.</p>
      
      <h2>Benefits of Telemedicine</h2>
      <p>Telemedicine offers many advantages, including increased access to care, reduced travel time, lower costs, and improved convenience for patients.</p>
      
      <h2>Types of Telemedicine Services</h2>
      <p>From routine consultations to mental health therapy and chronic disease management, telemedicine can be used for a wide range of healthcare services.</p>
      
      <h2>Technology Requirements</h2>
      <p>Most telemedicine appointments only require a smartphone, tablet, or computer with internet access and a camera.</p>
      
      <h2>The Future</h2>
      <p>As technology continues to advance, we can expect telemedicine to become even more integrated into routine healthcare delivery.</p>
    `,
    author: 'Dr. Lisa Thompson',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Technology'
  },
  {
    id: '6',
    title: 'Nutrition Guide for Healthy Aging',
    excerpt: 'Learn about proper nutrition for seniors and how diet can help maintain health and independence as we age.',
    content: `
      <h2>Nutritional Needs Change with Age</h2>
      <p>As we age, our nutritional needs change due to factors like decreased metabolism, changes in taste and smell, and medication interactions.</p>
      
      <h2>Key Nutrients for Seniors</h2>
      <p>Older adults need adequate protein, calcium, vitamin D, vitamin B12, and fiber to maintain health and prevent age-related conditions.</p>
      
      <h2>Meal Planning Tips</h2>
      <p>Plan balanced meals that are easy to prepare and enjoyable to eat. Consider consulting with a nutritionist for personalized advice.</p>
      
      <h2>Staying Hydrated</h2>
      <p>Dehydration is common among seniors. Aim to drink plenty of water throughout the day and include water-rich foods in your diet.</p>
      
      <h2>Social Aspects of Eating</h2>
      <p>Eating with others can improve nutrition and overall well-being. Consider community meal programs or dining with family and friends.</p>
    `,
    author: 'Dr. Sarah Johnson',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Nutrition'
  }
];
