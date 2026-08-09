/**
 * OrgChart — Craig Global Enterprises corporate structure.
 * Parent holding company → board & executive leadership → subsidiaries,
 * divisions, and operating entities. Ported from the approved org-chart tree,
 * styled with CGE brand tokens (see .cge-org in styles.css).
 * Collapses to a vertical, indented stack on mobile.
 */
export function OrgChart() {
  return (
    <div className="cge-org">
      <div className="tree" role="tree" aria-label="CGE corporate structure">
        <ul>
          <li>
            <div className="node parent" role="treeitem">
              <div className="tag">Parent · Assets Holding Company</div>
              <div className="brand">CGE</div>
              <div className="full">Craig Global Enterprises</div>
            </div>

            <div className="stem" />

            {/* Board & Executive Leadership */}
            <div className="leadership">
              <div className="lead-label">Board &amp; Executive Leadership</div>
              <div className="lead-row">
                <div className="exec ceo">
                  <div className="role">CEO</div>
                  <div className="who">Sergeant Major</div>
                </div>
                <div className="exec">
                  <div className="role">COO</div>
                  <div className="who">Taalib</div>
                </div>
                <div className="exec">
                  <div className="role">CSO / CLO</div>
                  <div className="who">Lynn</div>
                </div>
                <div className="exec">
                  <div className="role">CFO</div>
                  <div className="who">Ken Merritt</div>
                </div>
                <div className="exec">
                  <div className="role">CTO</div>
                  <div className="who">Ikechukwu Nnamani</div>
                </div>
                <div className="exec">
                  <div className="role">COS</div>
                  <div className="who">Dave</div>
                </div>
              </div>
            </div>

            <div className="divider">
              <span>Subsidiaries &amp; Divisions</span>
            </div>

            {/* Subsidiaries & divisions */}
            <ul>
              <li>
                <div className="node division">
                  <div className="tag">Division</div>
                  <div className="name">Nonprofit</div>
                </div>
                <ul>
                  <li>
                    <div className="node leaf">
                      <div className="name">Academies &amp; Schools</div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="node subsidiary">
                  <div className="name">CGE Management, LLC</div>
                </div>
                <div className="badge">Subsidiary</div>
              </li>

              <li>
                <div className="feeder">
                  <span className="arr">↳</span> Intake: <b>Got Bag, North America</b>
                </div>
                <div className="node subsidiary">
                  <div className="name">Craig Investments, LLC</div>
                </div>
                <div className="badge">Subsidiary</div>
                <ul>
                  <li>
                    <div className="node">
                      <div className="name">Got Bag Initiative</div>
                      <div className="roster">
                        <span>
                          <b>Ike</b> · Int'l CEO
                        </span>
                        <span>
                          <b>Joel</b> · Advisor
                        </span>
                        <span>
                          <b>Patricia</b> · Operations
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="node subsidiary">
                  <div className="name">CGE Entertainment, LLC</div>
                  <div className="sub">Contracts will be signed by</div>
                </div>
                <div className="badge">Subsidiary</div>
                <ul>
                  <li>
                    <div className="node leaf">
                      <div className="name">Advent</div>
                    </div>
                  </li>
                  <li>
                    <div className="node leaf">
                      <div className="name">Paralight.AI</div>
                    </div>
                  </li>
                  <li>
                    <div className="node leaf">
                      <div className="name">BBPI</div>
                    </div>
                  </li>
                  <li>
                    <div className="node leaf highlight">
                      <div className="name">Sgt. Major Records</div>
                    </div>
                  </li>
                  <li>
                    <div className="node leaf">
                      <div className="name">Odflix (Canada)</div>
                    </div>
                  </li>
                  <li>
                    <div className="node leaf">
                      <div className="name">Porter Craig</div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="node subsidiary">
                  <div className="tag">CGI</div>
                  <div className="name">Craig Global International Ltd</div>
                  <div className="sub">Nigeria — international branch</div>
                  <div className="roster">
                    <span>
                      <b>Ikechukwu Nnamani</b> · CEO
                    </span>
                  </div>
                </div>
                <div className="badge">Subsidiary</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <section className="org-notes">
        <h3>Abbreviation Key</h3>
        <div className="grid">
          <p>
            <b>CEO</b> Chief Executive Officer
          </p>
          <p>
            <b>COO</b> Chief Operating Officer
          </p>
          <p>
            <b>CSO / CLO</b> Chief Strategy or Security Officer / Chief Legal Officer
          </p>
          <p>
            <b>CFO</b> Chief Financial Officer
          </p>
          <p>
            <b>COS</b> Chief of Staff
          </p>
        </div>
        <h3 style={{ marginTop: 28 }}>Items to Confirm</h3>
        <div className="grid">
          <p>
            <span className="flag">CSO meaning:</span> Strategy, Security, or another title.
          </p>
          <p>
            <span className="flag">Full names:</span> only Ken Merritt is confirmed. Remaining
            executives are shown by first name or title.
          </p>
        </div>
      </section>
    </div>
  );
}
