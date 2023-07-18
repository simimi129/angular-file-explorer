export const nestedData = [
  {
    name: 'root',
    isFolder: true,
    isOpen: false,
    isSelected: false,
    list: [
      {
        name: 'dir1',
        isFolder: true,
        isOpen: true,
        isSelected: false,
        list: [
          {
            name: 'dir1-1',
            isFolder: true,
            isOpen: false,
            isSelected: false,
            list: [
              {
                name: 'file1-1-1',
                isFolder: false,
                isOpen: false,
                isSelected: false,
                list: [],
              },
              {
                name: 'file1-1-2',
                isFolder: false,
                isOpen: false,
                isSelected: false,
                list: [],
              },
            ],
          },
          {
            name: 'dir1-2',
            isFolder: true,
            isOpen: false,
            isSelected: false,
            list: [
              {
                name: 'file1-2-1',
                isFolder: false,
                isOpen: false,
                isSelected: false,
                list: [],
              },
              {
                name: 'dir1-2-1',
                isFolder: false,
                isOpen: false,
                isSelected: false,
                list: [
                  {
                    name: 'file1-2-1-1',
                    isFolder: false,
                    isOpen: false,
                    isSelected: false,
                    list: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'file3',
            isFolder: false,
            isOpen: false,
            isSelected: false,
            list: [],
          },
        ],
      },
    ],
  },
];
