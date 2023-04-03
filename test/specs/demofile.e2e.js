describe('Supervisor Roles', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
      });
      after(async () => {
        await browser.pause(10000);
      });
    it('REVIEWING BY THE SUPERVISOR OF HIS CLINICIANS FROM THE PROFILE DROP DOWN MENU(', async() => {
        await browser.url('http://192.168.3.75/reslab/reslab_crm_master/index.php?action=Login&module=Users')
        await browser.pause(2000);
        await $("#user_name").setValue("muhammad.saqib@resiliencelab.us");
        await $("#username_password").setValue("saqib1122");
        await $("#bigbutton").click();
        await $('[title] .suitepicon-action-caret').click() //click on drop down icon 
        await $('.desktop-bar #employees_link').click() //click on clinician 
        await $('.searchLink.listViewLinkButton_top .sugar_action_button').click() // click on filters button 
        await browser.pause(2000);

        await $('#search_name_basic').doubleClick()
        await $('#search_name_basic').setValue('muhammad saqib')
        await browser.keys('Enter');
        await browser.pause(2000);

        await ('.oddListRowS1 > td:nth-of-type(3)').click()
    });
});