import React, { useState } from 'react';
import { tailwindContent } from '../../data/web-development/tailwind';
import PageHeader from '../../components/common/PageHeader';
import SideNavigation from '../../components/common/SideNavigation';
import ExampleSection from '../../components/common/ExampleSection';
import AttributeTable from '../../components/common/AttributeTable';

const TailwindPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen dark:bg-[#0d1117] bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <PageHeader
          title={tailwindContent.title}
          icon={tailwindContent.icon}
          description={tailwindContent.description}
          color={tailwindContent.color}
        />

        <div className="grid grid-cols-12 gap-8">
          {/* Side Navigation */}
          <div className="col-span-3">
            <SideNavigation
              sections={tailwindContent.sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {tailwindContent.sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold dark:text-white text-black mb-6">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-gray-400 dark:text-gray-400 mb-6">{section.description}</p>
                )}

                {/* Examples */}
                {section.examples?.map((example, index) => (
                  <ExampleSection
                    key={index}
                    title={example.title}
                    code={example.code}
                    language="javascript"
                    filename={example.filename}
                  >
                    <div className="text-gray-300">
                      <p>{example.explanation}</p>
                      {example.preview && (
                        <div className="mt-4" dangerouslySetInnerHTML={{ __html: example.preview }} />
                      )}
                    </div>
                  </ExampleSection>
                ))}

                {/* Attributes Table */}
                {section.attributes && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
                      Attributes
                    </h3>
                    <AttributeTable attributes={section.attributes} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindPage; 