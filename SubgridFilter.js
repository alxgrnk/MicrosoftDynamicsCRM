function FilterSubgrid(executionContext) {
    
    var formContext = executionContext.getFormContext();

 
    var accountId = formContext.data.entity.getId().replace(/[{}]/g, "");

    var subgridControl = formContext.getControl("contacts_subgrid");
    if (!subgridControl) {
        console.error("Subgrid not found");
        return;
    }

    // Filter
    var fetchXml = `
    <fetch>
      <entity name="contact">
        <attribute name="fullname" />
        <attribute name="contactid" />
        <filter>
          <condition attribute="parentcustomerid" operator="eq" value="${accountId}" />
        </filter>
      </entity>
    </fetch>`;

    // Subgrid filter
    subgridControl.addCustomFilter(fetchXml, "contact");

    subgridControl.refresh();
}
