
const DATA = [
    // ---- アタックカード ----
    {
        packId:'vanila',
        costs:[
            {name:'red',color:'#e74c3c'},
            {name:'blue',color:'#3498db'},
            {name:'yellow',color:'#e6c92a'},
            {name:'green',color:'#2ecc71'},
        ],
        descIcon:[
            {id:'player',
		icon:[
                ['0', '0', '1', '1', '1', '0', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '1', '1', '0', '1', '1', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '0', '1', '1', '1', '0', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '1', '1', '1', '1', '1', '0']
		]
            },
            {id:'enemy',
		icon:[
                ['0', '1', '0', '0', '0', '1', '0'],
				['0', '1', '1', '1', '1', '1', '0'],
				['0', '1', '1', '1', '1', '1', '0'],
				['1', '0', '1', '1', '1', '0', '1'],
				['1', '1', '0', '1', '0', '1', '1'],
				['1', '1', '1', '1', '1', '1', '1'],
				['0', '1', '1', '1', '1', '1', '0']
		]
            },
            {id:'attack',
		icon:[
                ['0', '0', '0', '1', '1'],
				['1', '0', '1', '0', '1'],
				['0', '1', '0', '1', '0'],
				['0', '1', '1', '0', '0'],
				['1', '0', '0', '1', '0']
		]
            },
            {id:'turnEnd',
		icon:[
                ['1', '0', '0', '0', '1'],
				['0', '1', '0', '0', '1'],
				['0', '0', '1', '0', '1'],
				['0', '1', '0', '0', '1'],
				['1', '0', '0', '0', '1']
		]
            },
            {id:'getCost',
		icon:[
                ['0', '0', '1', '1', '0'],
				['1', '0', '0', '0', '0'],
				['1', '0', '1', '0', '1'],
				['0', '0', '0', '0', '1'],
				['0', '1', '1', '0', '0']
		]
            },
            {id:'buff',
		icon:[
                ['0', '0', '1', '0', '0'],
				['0', '1', '0', '1', '0'],
				['1', '0', '0', '0', '1'],
				['1', '0', '0', '0', '1'],
				['1', '1', '1', '1', '1']
		]
            },
            {id:'debuff',
		icon:[
                ['1', '1', '1', '1', '1'],
				['1', '0', '0', '0', '1'],
				['1', '0', '0', '0', '1'],
				['0', '1', '0', '1', '0'],
				['0', '0', '1', '0', '0']
		]
            },
            {id:'double',
		icon:[
                ['0', '0', '0', '0', '1', '1'],
				['0', '0', '0', '0', '0', '1'],
				['1', '0', '1', '0', '1', '0'],
				['0', '1', '0', '0', '1', '1'],
				['1', '0', '1', '0', '0', '0'],
				['0', '0', '0', '0', '0', '0']
		]
            },
            {id:'diffence',
		icon:[
                ['1', '1', '1', '1', '1'],
				['1', '0', '0', '0', '1'],
				['1', '0', '0', '0', '1'],
				['1', '0', '0', '0', '1'],
				['0', '1', '1', '1', '0']
		]
            },
            {id:'charge',
		icon:[
                ['0', '0', '1', '0', '0'],
				['0', '1', '0', '1', '0'],
				['1', '0', '0', '0', '1'],
				['0', '1', '0', '1', '0'],
				['0', '0', '1', '0', '0']
		]
            },
            {id:'poison',
		icon:[
				['0', '1', '1', '1', '0'],
				['1', '0', '0', '0', '1'],
				['1', '0', '0', '0', '1'],
				['0', '1', '0', '1', '0'],
				['0', '1', '1', '1', '0']
		]
            },
        ],
        cards:[
    {
        id:'small_sowrd',name:'たんじゅんなソード',type:'active',
        icon:[
                ['0','0','0','0','0','1','1'],
                ['0','0','0','0','1','0','1'],
                ['0','1','0','1','0','1','0'],
                ['0','1','1','0','1','0','0'],
                ['0','0','1','1','0','0','0'],
                ['0','1','1','0','1','1','0'],
                ['1','1','0','0','0','0','0']
            ],
        desc:'シンプルながらに、するどさばつぐん',
        actionIcon:[{id:'enemy',value:'none'},{id:'attack',value:'d'}],
        value:{d:3},
        costs:[{type:'red',value:1}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'d',op:'+',value:1}
        ],
        useAction:[
            {type:'attack',target:'enemy',targetNum:'target',value:'d',hit:1}
        ]
    },
    {
        id:'normal_katana',name:'KATANA',type:'active',
		icon:[
				['0', '0', '0', '0', '0', '1', '0'],
				['0', '0', '0', '0', '1', '0', '1'],
				['0', '0', '0', '1', '0', '0', '1'],
				['0', '0', '1', '0', '0', '1', '0'],
				['0', '1', '0', '0', '1', '0', '0'],
				['1', '1', '1', '1', '0', '0', '0'],
				['1', '1', '0', '0', '0', '0', '0']
			],
        desc:'万人をも切り裂く切片',
        actionIcon:[{id:'enemy',value:'none'},{id:'attack',value:'d'}],
        value:{d:3},
        costs:[{type:'red',value:2}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'d',op:'+',value:2}
        ],
        useAction:[
            {type:'attack',target:'enemy',targetNum:'all',value:'d',hit:1}
        ]
    },
    {
        id:'secret_katana',name:'クナイ',type:'active',
		icon:[
				['0', '0', '0', '0', '0', '0', '0'],
				['0', '0', '0', '0', '1', '1', '0'],
				['0', '0', '0', '1', '0', '1', '0'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '0', '1', '1', '0', '0', '0'],
				['0', '1', '0', '0', '0', '0', '0'],
				['0', '0', '0', '0', '0', '0', '0']
			],
        desc:'懐に潜ませた不意打ちの刀',
        actionIcon:[{id:'enemy',value:'none'},{id:'attack',value:'d'}],
        value:{d:5},
        costs:[{type:'red',value:0}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'d',op:'+',value:5}
        ],
        useAction:[
            {type:'attack',target:'enemy',targetNum:'all',value:'d',hit:1}
        ]
    },
    {
        id:'butter_knife',name:'ばたーないふ',type:'active',
		icon:[
				['0', '0', '0', '0', '0', '0', '0'],
				['0', '0', '0', '0', '1', '1', '0'],
				['0', '0', '0', '1', '0', '1', '0'],
				['0', '0', '1', '0', '0', '1', '0'],
				['0', '1', '1', '1', '1', '0', '0'],
				['0', '1', '1', '0', '0', '0', '0'],
				['0', '0', '0', '0', '0', '0', '0']
			],
        desc:'あんしん・あんぜんの柔らかいナイフ',
        actionIcon:[{id:'enemy',value:'none'},{id:'attack',value:'d'},{id:'player',value:'none'},{id:'getCost',value:'c'}],
        value:{d:1,c:1},
        costs:[{type:'red',value:1}],
        rarity:'R',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'d',op:'*',value:4},
            {type:'variable',path:'c',op:'*',value:4}
        ],
        useAction:[
            {type:'attack',target:'enemy',targetNum:'target',value:'d',hit:1},
            {type:'function',op:'getCost',value:['red','c']}
        ]
    },
    // ---- 防御カード ----
    {
        id:'round_shield',name:'まんまるい盾',type:'active',
        icon:[
                ['0','0','0','0','0','0','0'],
                ['0','0','1','1','1','0','0'],
                ['0','1','0','0','0','1','0'],
                ['0','1','0','0','0','1','0'],
                ['0','1','0','0','0','1','0'],
                ['0','0','1','1','1','0','0'],
                ['0','0','0','0','0','0','0']
            ],
        desc:'身軽に使えるやさしいかたち',
        actionIcon:[{id:'player',value:'none'},{id:'diffence',value:'e'}],
        value:{e:3},
        costs:[{type:'blue',value:1}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e',op:'+',value:2}
        ],
        useAction:[
            {type:'effect',target:'player',effect:'diffence',value:'e',hit:1}
        ]
    },
    {
        id:'square_shield',name:'かくばった盾',type:'active',
		icon:[
				['1', '1', '1', '1', '1', '1', '1'],
				['1', '0', '0', '0', '0', '0', '1'],
				['1', '0', '0', '0', '0', '0', '1'],
				['1', '0', '0', '0', '0', '0', '1'],
				['1', '0', '0', '0', '0', '0', '1'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '0', '1', '1', '1', '0', '0']
		],
        desc:'ずっしり構える頼もしさ',
        actionIcon:[{id:'player',value:'none'},{id:'diffence',value:'e'}],
        value:{e:5},
        costs:[{type:'blue',value:2}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e',op:'+',value:3}
        ],
        useAction:[
            {type:'effect',target:'player',effect:'diffence',value:'e',hit:1}
        ]
    },
    // ---- 魔法カード　----
    {
        id:'normal_charge',name:'キラキラともしび',type:'active',
        icon:[
                ['0','0','0','1','0','0','0'],
                ['0','0','0','1','0','0','0'],
                ['0','0','1','0','1','0','0'],
                ['0','1','0','0','0','1','0'],
                ['0','0','1','0','1','0','0'],
                ['0','0','0','1','0','0','0'],
                ['0','0','0','1','0','0','0']
            ],
        desc:'おそらに輝くひかり',
        actionIcon:[{id:'player',value:'none'},{id:'charge',value:'e'}],
        value:{e:1},
        costs:[{type:'yellow',value:1}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e',op:'+',value:2}
        ],
        useAction:[
            {type:'effect',target:'player',effect:'charge',value:'e',hit:1}
        ]
    },
    {
        id:'double_charge',name:'ばいようボックス',type:'active',
		icon:[
				['0', '0', '1', '1', '1', '0', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '0', '1', '1', '1', '0', '0']
			],
        desc:'培ってからかいほうする',
        actionIcon:[{id:'player',value:'none'},{id:'charge',value:'none'},{id:'double',value:'none'}],
        value:{e:1},
        costs:[{type:'yellow',value:3}],
        rarity:'R',
        upgradeNum:1,
        upgradeMax:1,
        upgradeAction:[
        ],
        useAction:[
            {type:'variable',path:'player@charge',op:'*',value:'e'}
        ]
    },
        {
        id:'rest_charge',name:'蓄勢',type:'active',
		icon:[
				['0', '0', '0', '1', '0', '0', '0'],
				['1', '1', '0', '1', '0', '1', '1'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '1', '1', '1', '1', '1', '0']
			],
        desc:'次に備える',
        actionIcon:[{id:'player',value:'none'},{id:'charge',value:'e'},{id:'turnEnd',value:'none'}],
        value:{e:5},
        costs:[{type:'green',value:1},{type:'yellow',value:2}],
        rarity:'R',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e',op:'+',value:5}
        ],
        useAction:[
            {type:'effect',target:'player',effect:'charge',value:'e',hit:1},
            {type:'function',op:'turnEnd',value:[100]}
        ]
    },
        {
        id:'normal_poison',name:'どくどくドクロ',type:'active',
		icon:[
				['0', '0', '0', '0', '0', '0', '0'],
				['0', '0', '1', '1', '1', '0', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '1', '0', '0', '0', '1', '0'],
				['0', '0', '1', '0', '1', '0', '0'],
				['0', '0', '1', '1', '1', '0', '0'],
				['0', '0', '0', '0', '0', '0', '0']
			],
        desc:'おどろおどろしい',
        actionIcon:[{id:'player',value:'none'},{id:'poison',value:'e'}],
        value:{e:1},
        costs:[{type:'green',value:1}],
        rarity:'C',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e',op:'+',value:3}
        ],
        useAction:[
            {type:'effect',target:'enemy',targetNum:'target',effect:'poison',value:'e',hit:1}
        ]
    },
        {
        id:'dual_poison',name:'華麗なるどくだみのハナ',type:'active',
		icon:[
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '1', '1', '0', '1', '1', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['0', '0', '0', '1', '0', '0', '0'],
				['1', '0', '1', '0', '0', '0', '0'],
				['0', '1', '1', '1', '1', '0', '0']
			],
        desc:'実は毒性はない',
        actionIcon:[{id:'enemy',value:'none'},{id:'poison',value:'e2'},{id:'player',value:'none'},{id:'poison',value:'e1'}],
        value:{e1:3,e2:1},
        costs:[{type:'green',value:2}],
        rarity:'UC',
        upgradeNum:1,
        upgradeMax:2,
        upgradeAction:[
            {type:'variable',path:'e1',op:'*',value:2},
            {type:'variable',path:'e2',op:'+',value:1}
        ],
        useAction:[
            {type:'effect',target:'enemy',targetNum:'target',effect:'poison',value:'e1',hit:1},
            {type:'effect',target:'player',effect:'poison',value:'e2',hit:1}
        ]
    },
        ]
    }
]




