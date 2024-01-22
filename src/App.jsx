import './App.scss'

const tree = [
  {
    "title": "Tree Start",
    "plus": true
  },
  {
    "title": "Step 1",
    "plus": true
  },
  {
    "title": "Step 2",
    "child": [
      {
        "title": "Sub Tree",
        "curve": true,
        "child": [
          {
            "title": "Step 1"
          }
        ]
      },
      {
        "title": "Sub Tree",
        "curve": true,
        "child": [
          {
            "title": "Step 1"
          }
        ]
      }
    ]
  }
]

function App() {
  return (
    <div className="container">
      <div className="content">
        {
          tree.map((data, i) => (
            <>
              <div key={i} className="top-panel">
                <div className="tree-start">{data.title}</div>
                {
                  data.plus && <>
                    <div className="connector" />
                    <img className="plus-btn" src="/plus.svg" alt="" />
                    <div className="connector" />
                  </>
                }
              </div>
              {
                data.child && data.child.map((d, i) => (
                  <div key={i} className="bottom-panel">
                    <div className="left">
                      <div className="bottom-connector" />
                      <div className="sub-tree1">{d.title}</div>
                      {d.curve && <img className="bottom-line1" src="/Vector8.svg" alt="" />}
                      <img className="plus-btn" src="/plus.svg" alt="" />
                      {d.curve && <img className='bottom-line2' src="/Vector7.svg" alt="" />}
                      {d.child && d.child.map((d, i) => (
                        <div key={i} className="bottom-step-1">{d.title}</div>
                      ))}
                    </div>
                    <div className="right">
                      <div className="bottom-connector" />
                      <div className="sub-tree1">{d.title}</div>
                      {d.curve && <img className="bottom-line1" src="/Vector5.svg" alt="" />}
                      <img className="plus-btn" src="/plus.svg" alt="" />
                      {d.curve && <img className='bottom-line2' src="/Vector4.svg" alt="" />}
                      {d.child && d.child.map((d, i) => (
                        <div key={i} className="bottom-step-1">{d.title}</div>
                      ))}
                    </div>
                  </div>
                ))
              }
            </>
          ))
        }
      </div>
    </div>
  )
}

export default App
