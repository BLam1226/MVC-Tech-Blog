const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

(async () => {
  await sequelize.sync({ force: true });

  try {
    const users = await User.bulkCreate([
      {
        username: "LernantinoG3",
        password: "password1",
      },
      {
        username: "Amiko2k20A",
        password: "password2",
      },
      {
        username: "Jordan99MSN",
        password: "password3",
      },
    ]);

    const posts = await Post.bulkCreate([
      {
        title: "AI in Everyday Life",
        content:
          "AI has already become an integral part of our daily lives. Voice-activated virtual assistants like Siri and Alexa have made it possible to control our homes, answer questions, and even play our favorite songs with just a few spoken words. AI-powered recommendation systems suggest products we might like, and chatbots are providing customer support around the clock.",
        user_id: users[0].id,
      },
      {
        title: "AI and the Job Market",
        content:
          "While AI promises numerous benefits, it also raises concerns about job displacement. Automation powered by AI has the potential to replace certain tasks currently performed by humans. However, it's essential to remember that AI can also create new job opportunities. As AI technology evolves, we'll see a shift in the types of skills that are in demand, with a growing need for individuals who can design, maintain, and enhance AI systems.",
        user_id: users[1].id,
      },
      {
        title: "Ethical Considerations",
        content:
          "As AI becomes more integrated into our lives, ethical concerns come to the forefront. Issues like bias in AI algorithms, data privacy, and AI's impact on decision-making processes need careful consideration. Ensuring that AI is developed and used responsibly is a challenge that governments, organizations, and individuals must address.",
        user_id: users[2].id,
      },
    ]);

    await Comment.bulkCreate([
      {
        comment_text: "Skynet is coming!",
        user_id: users[0].id,
        post_id: posts[0].id,
      },
      {
        comment_text: "I for one welcome our new robot overlords.",
        user_id: users[1].id,
        post_id: posts[0].id,
      },
      {
        comment_text: "I think AI is a great tool for businesses.",
        user_id: users[2].id,
        post_id: posts[1].id,
      },
      {
        comment_text: "Humans are obsolete.",
        user_id: users[0].id,
        post_id: posts[2].id,
      },
    ]);

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    process.exit(0);
  }
})();
