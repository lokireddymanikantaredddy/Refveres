import React from 'react';

const AttributeTable = ({ attributes, className = '' }) => {
  return (
    <div className={`overflow-x-auto rounded-lg mb-4 ${className}`}>
      <table className="w-full text-left">
        <thead className="bg-[#fefefe] text-gray-300">
          <tr>
            <th className="px-4 py-3 font-semibold">Attribute</th>
            <th className="px-4 py-3 font-semibold">Description</th>
            <th className="px-4 py-3 font-semibold">Required</th>
            <th className="px-4 py-3 font-semibold">Type</th>
          </tr>
        </thead>
        <tbody className="bg-[#1b1f24] divide-y divide-gray-700">
          {attributes.map((attr, index) => (
            <tr key={index} className="text-gray-300">
              <td className="px-4 py-3 font-mono text-emerald-400">{attr.name}</td>
              <td className="px-4 py-3">{attr.description}</td>
              <td className="px-4 py-3">
                {attr.required ? (
                  <span className="text-red-400">Required</span>
                ) : (
                  <span className="text-gray-400">Optional</span>
                )}
              </td>
              <td className="px-4 py-3 font-mono text-blue-400">{attr.type || 'any'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttributeTable;