const tree = {
  tag: 'A',
  children: [
    {
      tag: 'B',
      children: [
        {
          tag: 'D',
          children: []
        },
        {
          tag: 'E',
          children: []
        }
      ]
    },
    {
      tag: 'C',
      children: [
        {
          tag: 'F',
          children: []
        },
        {
          tag: 'G',
          children: []
        }
      ]
    }
  ]
};



const tree2 = {
  tag: 'A',
  children: [
    {
      tag: 'B',
      children: [
        {
          tag: 'D',
          children: [
            {
              tag: 'H',
              children: []
            },
            {
              tag: 'I',
              children: []
            }
          ]
        },
        // {
        //   tag: 'E',
        //   children: []
        // }
      ]
    },
    {
      tag: 'C',
      children: [
        {
          tag: 'F',
          children: [
            {
              tag: 'L',
              children: []
            },
            {
              tag: 'M',
              children: []
            }
          ]
        },
        {
          tag: 'G',
          children: []
        }
      ]
    }
  ]
};
const tree3 = {
  tag: 'A',
  children: [
    {
      tag: 'B',
      children: [
        {
          tag: 'D',
          children: [
            {
              tag: 'H',
              children: []
            },
            {
              tag: 'I',
              children: []
            },
            {
              tag: 'E',
              children: []
            }
          ]
        },
      ]
    },
    {
      tag: 'C',
      children: [
        {
          tag: 'F',
          children: [
            {
              tag: 'L',
              children: []
            },
            {
              tag: 'L2',
              children: []
            },
            {
              tag: 'L23',
              children: []
            },
            {
              tag: 'M',
              children: []
            }
          ]
        },
        {
          tag: 'G',
          children: []
        }
      ]
    },
    {
      tag: 'D',
      children: [
        {
          tag: 'F2',
          children: [
            {
              tag: 'L2',
              children: []
            },
            {
              tag: 'M2',
              children: []
            }
          ]
        },
        {
          tag: 'G2',
          children: []
        }
      ]
    }
  ]
};

const tree4 = {
  tag: 'A',
  children: [
    {
      tag: 'B',
      children: [
        {
          tag: 'D',
          children: [
            {
              tag: 'H',
              children: []
            },
            {
              tag: 'I',
              children: []
            }
          ]
        }
      ]
    },
    {
      tag: 'C',
      children: [
        {
          tag: 'F',
          children: [
            {
              tag: 'L',
              children: []
            },
            {
              tag: 'M',
              children: []
            }
          ]
        },
        {
          tag: 'G',
          children: []
        }
      ]
    }
  ]
};

const tree5 = { // 二叉查找树，左 => 中 => 右 从小到大有序
  num: 13,
  children: [
    {
      num: 10,
      children: [
        {
          num: 9,
          children: []
        },
        {
          num: 11,
          children: []
        }
      ]
    },
    {
      num: 16,
      children: [
        {
          num: 14,
          children: []
        }
      ]
    }
  ]
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

const binarySearchTree = {
  left: {
    left: {
      left: null,
      data: 13,
      right: {
        left: null,
        data: 16,
        right: null
      }
    },
    data: 17,
    right: {
      left: null,
      data: 18,
      right: {
        left: {
          left: null,
          data: 19,
          right: null
        },
        data: 25,
        right: {
          left: null,
          data: 27,
          right: null
        }
      }
    }
  },
  data: 33,
  right: {
    left: {
      left: null,
      data: 34,
      right: null
    },
    data: 50,
    right: {
      left: {
        left: null,
        data: 51,
        right: null
      },
      data: 58,
      right: {
        left: null,
        data: 66,
        right: null
      }
    }
  }
};

// 插入数据和节点数据相同就放在该节点的数组中，
const binarySearchTree2 = {
  left: {
    left: {
      left: null,
      data: [13],
      right: {
        left: null,
        data: [16],
        right: null
      }
    },
    data: [17],
    right: {
      left: null,
      data: [18],
      right: {
        left: {
          left: null,
          data: [19],
          right: null
        },
        data: [25],
        right: {
          left: null,
          data: [27],
          right: null
        }
      }
    }
  },
  data: [33],
  right: {
    left: {
      left: null,
      data: [34],
      right: null
    },
    data: [50],
    right: {
      left: {
        left: null,
        data: [51],
        right: null
      },
      data: [58],
      right: {
        left: null,
        data: [66],
        right: null
      }
    }
  }
};

const binarySearchTree3 = {
  left: {
    left: {
      left: null,
      data: 13,
      right: {
        left: null,
        data: 15,
        right: null
      }
    },
    data: 16,
    right: {
      left: {
        left: null,
        data: 17,
        right: null
      },
      data: 18,
      right: {
        left: {
          left: null,
          data: 19,
          right: null
        },
        data: 25,
        right: {
          left: null,
          data: 27,
          right: null
        }
      }
    }
  },
  data: 33,
  right: {
    left: {
      left: null,
      data: 34,
      right: null
    },
    data: 50,
    right: {
      left: {
        left: null,
        data: 51,
        right: {
          left: null,
          data: 55,
          right: null
        }
      },
      data: 58,
      right: {
        left: null,
        data: 66,
        right: null
      }
    }
  }
};

module.exports = {
  tree,
  tree2,
  tree3,
  tree4,
  tree5,
  arr,
  binarySearchTree,
  binarySearchTree2,
  binarySearchTree3
};