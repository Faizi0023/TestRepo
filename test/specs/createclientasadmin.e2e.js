describe.skip("My Login application", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  after(async () => {
    await browser.pause(10000);
  });
  it("should login with valid credentials", async () => {
    await browser.url(
      "http://192.168.3.56/reslab_crm/index.php?action=Login&module=Users" //URL 
    );
    await $("#user_name").setValue("newadmin");   //username 
    await $("#username_password").setValue("123"); //password
    await $("#bigbutton").click();                 //loginbutton
  });
  it("TestingGPTsesson", async () => {
    //  browser.reloadSession(sessionId);
    await $(".desktop-bar #quickcreatetop [data-toggle]").click();
    await $(".desktop-bar #quickcreatetop [role] li:nth-of-type(2)").click();
    await $("#first_name").setValue("TestQA1234");
    await $("#last_name").setValue("lastname");
    //await $('#state_of_residence')
    //await $('select#state_of_residence > option[label="Alabama"]').click();

    //      await $('#dob_trigger').click()
    await $("#dob").setValue("8/5/2010");
    await $("#Accounts0emailAddress0").setValue("test@henhd.com");
    //    await $('#client_source').click()
    await $('select#client_source > option[label="Alma"]').click();
    await $('select#account_channel > option[label="Clinician Email"]').click();
    await $("#SAVE").click();
  });
});
