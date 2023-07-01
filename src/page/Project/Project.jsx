import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectContener from "./ProjectContener";

const Project = () => {
  const [index, setIndex] = useState(0);

  const allTab = ["all", "nextJs", "mern", "node", "react", "Html"];

  return (
    <div className="py-5 px-6">
      <Tabs
        selectedIndex={index}
        onSelect={(index) => {
          setIndex(index);
        }}
      >
        <TabList>
          {allTab.map((tab) => (
            <Tab key={tab}>
              {" "}
              <p className="uppercase">{tab}</p>{" "}
            </Tab>
          ))}
        </TabList>
        {allTab.map((tab, index) => (
          <TabPanel key={index}>
            <ProjectContener tabName={tab} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Project;
