describe.skip("My Login application", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  after(async () => {
    await browser.pause(10000);
  });
  it("should login with valid credentials", async () => {
    await browser.url(
      "http://192.168.3.56/reslab_crm/index.php?action=Login&module=Users"
    );

    await $("#user_name").setValue("aarian.punter@resiliencelab.us");
    await $("#username_password").setValue("123");
    await $("#bigbutton").click();
  });
  it("TestingGPTsesson", async () => {
    await $(".desktop-bar #quickcreatetop [data-toggle]").click();
    await $(".desktop-bar #quickcreatetop [role] li:nth-of-type(1)").click();
    await $("#first_name").setValue("TestdQA1234");
    await $("#last_name").setValue("lastnamed");
    await $("#state_of_residence");
  //  await $('select#state_of_residence > option[label="Alabama"]').click();
    await $("#dob").setValue("8/7/2000");
    await $("#Accounts0emailAddress0").setValue("test@125a.com");
    await $('select#client_source > option[label="Alma"]').click();
    await $('select#account_channel > option[label="Clinician Email"]').click();
    await $("#pagecontent .buttons:nth-child(8) #SAVE").click();
    await browser.url(
   //   "http://192.168.3.56/reslab_crm/index.php?module=Accounts&action=index&return_module=Accounts&return_action=DetailView"
    );
  });
});
