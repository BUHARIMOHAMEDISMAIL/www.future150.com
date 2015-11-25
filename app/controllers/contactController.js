module.exports = function(app) {
  app.get('/contacts', function(req, res) {
    var tempContactResult = {
      "count": "2",
      "contacts": [
        {
          "id": "bd3f7ff5-c1b4-428a-b9a0-8f5e117c3831",
          "firstName": "Jason",
          "lastName": "Pratt",
          "title": "President/Sr. Analyst",
          "phone": "312-953-9130",
          "email": "jpratt@future150.com",
          "twitter": "@F150PREZ",
          "profileImageUrl": "//future150.com/images/uploads/main/jason_pratt.jpg"
        },
        {
          "id": "19eea6cb-27dc-4adb-8281-9b228af9cb81",
          "firstName": "Andrew",
          "lastName": "Force",
          "title": "GM / National Analyst",
          "phone": "217-521-7004",
          "email": "force@Future150.com",
          "twitter": "@AForceF150",
          "profileImageUrl": "//future150.com/images/uploads/main/Andrew-Force-Twitter.jpg"
        }
      ]
    };
    res.json(tempContactResult);
  });
};
