module.exports = function(app) {
  app.get('/contacts', function(req, res) {
    var result =  {
        count: 4,
        articles: [
            {
                slug: "looking-at-the-1-recruiting-class-kentucky-wildcats",
                description: "After picking up a commitment from elite SG Malik Monk, UK vaulted over Duke to take over the #1 spot.",
                date: "",
                title: "Looking At The #1 Recruiting Class: Kentucky Wildcats",
                imageUrl: "//future150.com/images/made/images/uploads/articles/wenyen-gabriel-kentucky-commit_643_341shar-60-.5-10_s_c1_c_c.png"
            },
            {
                slug: "johnny-newman-talks-recruitment-goals-for-this-season",
                description: "2018 wing John Newman is becoming a big piece for Greensboro Day, and is gaining interest.",
                date: "",
                title: "Johnny Newman Talks Recruitment And Goals",
                imageUrl: "//future150.com/images/made/images/uploads/articles/Johnny_Newman_643_341_90shar-60-.5-10_s_c1_c_c.JPG"
            },
            {
                slug: "early-signing-period-comes-to-end-with-a-bang",
                description: "The early signing period came to a close in style on Wednesday, as a trio of top-40 recruits all announced their college destinations.",
                date: "",
                title: "Early Signing Period Comes to End With A Bang",
                imageUrl: "//future150.com/images/made/images/uploads/articles/Skal-Labissiere-Malik-Monk_643_341shar-60-.5-10_s_c1_c_t.png"
            },
            {
                slug: "tripp-greene-showing-promise",
                description: "2018 G Tripp Greene has been showing promise as a potential lead guard at the D1 level",
                date: "",
                title: "Tripp Greene Showing Promise",
                imageUrl: "//future150.com/images/made/images/uploads/articles/IMG_1054_643_341_90shar-60-.5-10_s_c1_c_c.JPG"
            }
        ]
    };
  });
};
