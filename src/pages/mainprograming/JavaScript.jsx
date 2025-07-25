import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jsContent } from '../../data/programing/javascript';
import PageHeader from '../../components/common/PageHeader';
import SideNavigation from '../../components/common/SideNavigation';
import ExampleSection from '../../components/common/ExampleSection';
import AttributeTable from '../../components/common/AttributeTable';

const JavaScript = () => {
  const [activeSection, setActiveSection] = useState(jsContent.sections[0]?.id || 'getting-started');
  const location = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#0d1117] bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <PageHeader
          title={jsContent.title}
          icon={jsContent.icon}
          description={jsContent.description}
          color={jsContent.color}
        />

        <div className="grid grid-cols-12 gap-8">
          {/* Side Navigation */}
          <div className="col-span-3">
            <SideNavigation
              sections={jsContent.sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {jsContent.sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold dark:text-white text-black mb-6">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-gray-400 mb-6">{section.description}</p>
                )}
                {section.examples?.map((example, index) => (
                  <ExampleSection
                    key={index}
                    {...example}
                  />
                ))}
                {section.attributes && (
                  <AttributeTable attributes={section.attributes} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
