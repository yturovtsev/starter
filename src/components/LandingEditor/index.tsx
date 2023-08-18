import React from 'react';
import GjsEditor from '@grapesjs/react';
import grapesjs, { Editor, ProjectData } from 'grapesjs';
import GrapesjsBlocksBasic from 'grapesjs-blocks-basic';
import GrapesjsPluginForms from 'grapesjs-plugin-forms';
import GrapesjsPresetNewsletter from 'grapesjs-preset-newsletter';
import GrapesjsPresetWebpage from 'grapesjs-preset-webpage';

import 'grapesjs/dist/css/grapes.min.css';

const opts = {
  grapesjs,
  plugins: [
    GrapesjsBlocksBasic,
    GrapesjsPresetNewsletter,
    GrapesjsPresetWebpage,
    GrapesjsPluginForms,
  ],
  options: {
    height: '100vh',
    storageManager: false,
  },
};

const data = {
  assets: [],
  styles: [
    {
      selectors: ['#ie0t'],
      style: {
        color: '#d983a6',
      },
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            attributes: {
              id: 'icfh',
            },
            components: [
              {
                type: 'link',
                attributes: {
                  id: 'ie0t',
                  title: 'My link',
                },
                components: [
                  {
                    type: 'textnode',
                    content: 'Linsdfsdffdsk',
                  },
                ],
              },
            ],
          },
        },
      ],
      type: 'main',
      id: '0HDzTSpHb3nVOYI0',
    },
  ],
};

export const LandingEditorContainer = () => {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  const onUpdate = (projectData: ProjectData, editor: Editor) => {
    console.log({ projectData, editor });
  };

  return <GjsEditor {...opts} onEditor={onEditor} onUpdate={onUpdate} />;
};
