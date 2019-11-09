import React from 'react'
import { Divider } from 'antd'
import { ColumnProps } from 'antd/es/table'

export interface recordType{
  name: string
}

export interface Article {
  key: string,
  name: string,
  age: number,
  address: string,
  tags: string[],
}

export const columns:ColumnProps<Article>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '歌名',
    dataIndex: 'name',
    width: 160,
    key: 'name',
    render: text => <a href="javascript(void 0)">{text}</a>
  },
  {
    title: '歌手',
    key: 'tags',
    width: 100,
    dataIndex: 'tags'
  },
  {
    title: '海报',
    key: 'tags',
    width: 120,
    dataIndex: 'tags'
  },
  {
    title: '歌曲链接',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <div className="btnbox">
        <a href="javascript(void 0)">编辑</a>
        <Divider type="vertical" />
        <a href="javascript(void 0)">删除</a>
      </div>
    )
  }
]


export const data:Article[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
]
