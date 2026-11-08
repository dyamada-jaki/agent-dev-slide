---
marp: true
theme: paper-en
size: 16:9
paginate: true
lang: en
title: Bringing Scrum to Development with AI
description: The agent-dev-template development process
---

<!-- _class: cover cover-illustrated -->
<!-- _paginate: false -->

# <span>Bringing Scrum</span><span>to Development</span><span>with AI</span>

<img class="cover-scene" src="assets/cover/development-team.png" alt="A person reviews a plan while two AI developers work at laptops, illustrated in soft watercolor.">

---

<!-- _class: overview -->

## How people and AI work together

<div class="ov" role="figure" aria-label="A person and an AI Product Owner clarify the work together. The Product Owner writes a GitHub Issue. A coordinator manages planning, development, review and retrospective. Two AI developers each produce a solution and review each other's work. The person approves plans, inspects the result and decides which improvements to adopt. The AI Product Owner checks acceptance criteria and uses the handoff to update future specifications and issues.">
<p class="ov-intent">Putting Scrum into practice through its <span>roles and events</span></p>
<div class="ov-scope"></div>
<svg class="ov-wires" viewBox="0 0 1280 720" aria-hidden="true">
<defs><marker id="ov-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="#1F2B47" stroke-width="1.5"/></marker><marker id="ov-soft-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="#62626C" stroke-width="1.5"/></marker></defs>
<path d="M 382 262 V 286 H 1030 V 262 M 382 286 H 52 V 384" fill="none" stroke="#1F2B47" stroke-width="1.8"/>
<path d="M 536 222 H 856" fill="none" stroke="#62626C" stroke-width="1.5" marker-start="url(#ov-soft-arrow)" marker-end="url(#ov-soft-arrow)"/>
<g fill="none" stroke="#1F2B47" stroke-width="1.8" marker-end="url(#ov-arrow)"><path d="M 1130 262 V 336 H 764"/><path d="M 516 336 H 200 V 392"/></g>
<g fill="none" stroke="#1F2B47" stroke-width="2" marker-end="url(#ov-arrow)"><path d="M 324 443 H 366"/><path d="M 614 443 H 656"/><path d="M 904 443 H 946"/><path d="M 1070 515 V 544 H 1000 V 565"/><path d="M 1078 586 H 1250 V 370 H 740 V 357"/></g>
<path d="M 200 515 V 519 H 490 V 515 M 216 519 V 524" fill="none" stroke="#D7D2C4" stroke-width="2"/>
</svg>
<div class="ov-actor ov-human"><img class="" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human</h3><p>Sets direction and priorities.<br>Decides what to adopt.</p></div></div>
<p class="ov-dialogue">Clarify the work together</p>
<p class="ov-issue">GitHub Issue</p>
<p class="ov-issue-write">Create /<br>update</p>
<p class="ov-issue-start">Start when ready</p>
<div class="ov-actor ov-po"><img class="" src="assets/roles/po-distinct-v2.png" alt="The AI Product Owner, with silver hair and glasses"><div><h3>Product Owner<span class="ov-tag">AI</span></h3><p>Turns decisions<br>into issues</p></div></div>
<div class="ov-stage ov-s1"><h3>Planning</h3><p>Developers → Coordinator<br><strong class="ov-human-action">Human approves</strong></p></div>
<div class="ov-stage ov-s2"><h3>Development</h3><p>Build and test<br>Review each other's work</p></div>
<div class="ov-stage ov-s3"><h3>Review</h3><p class="ov-sequence">AI PO checks acceptance<br><span class="ov-down">↓</span><br><strong class="ov-human-action">Human reviews &amp; decides</strong></p></div>
<div class="ov-stage ov-s4"><h3>Retrospective</h3><p>Proposes improvements<br><strong class="ov-human-action">Human chooses changes</strong></p></div>
<div class="ov-actor ov-developers"><div class="ov-portraits"><img class="" src="assets/roles/developer-1.png" alt="The Claude Code developer at a laptop"><img class="" src="assets/roles/developer-2.png" alt="The Codex developer at a laptop"></div><div><h3>Developers<span class="ov-tag">AI</span></h3><p>Two developers,<br>two separate solutions</p></div></div>
<div class="ov-actor ov-team"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="ov-tag">AI</span></h3><p>Manages the entire cycle</p></div></div>
<p class="ov-handoff">Hand off<br>findings</p><p class="ov-return">AI PO uses findings to update specifications and issues</p>
</div>

---

## Who does what

<div class="role-map"><div class="role-row"><div class="role-box human"><img class="role-portrait tall" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human<span class="role-tag">Stakeholder / PO</span></h3><ul class="role-points"><li>Sets direction and priorities<br>with the AI PO</li><li>Makes decisions on plans,<br>results and improvements</li></ul></div></div><p class="role-dialogue">⇄<br>Discuss<br>and clarify</p><div class="role-box"><img class="role-portrait" src="assets/roles/po-distinct-v2.png" alt="The AI Product Owner, with silver hair and glasses"><div><h3>PO<span class="role-tag">AI</span></h3><ul class="role-points"><li>Works through priorities and<br>writes specifications and issues</li><li>Checks the result against<br>acceptance criteria</li></ul></div></div></div><div class="role-row"><div class="role-box"><img class="role-portrait" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3><ul class="role-points"><li>Manages each issue and<br>compares the two solutions</li><li>Merges the chosen work,<br>cleans up and runs the retrospective</li></ul></div></div><div class="role-box"><div class="role-pair"><img class="role-portrait" src="assets/roles/developer-1.png" alt="The Claude Code developer at a laptop"><img class="role-portrait" src="assets/roles/developer-2.png" alt="The Codex developer at a laptop"></div><div><h3>Developers<span class="role-tag">AI</span></h3><ul class="role-points"><li>Plan, build and test separate<br>solutions to the same issue</li><li>Review each other's<br>pull requests (PRs)</li></ul></div></div></div><p class="role-note">PO = Product Owner. The coordinator is the template’s “development team” role.<br>There is no separate Scrum Master.</p></div>

---

<ol class="acts" aria-label="Scrum events and related activities"><li class="acts-label">Events &amp; activities</li><li class="now">Refinement</li><li>Planning</li><li>Development</li><li>Review</li><li>Retrospective</li></ol>

## Refinement: defining what to build

<div class="act-flow" role="figure" aria-label="The human and AI PO clarify the goal. The PO records decisions in the specification and defines an issue with purpose, scope and acceptance criteria."><div class="act-box human"><div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human</h3></div></div><p>Discusses the goal<br>with the AI PO.<br><strong class="act-judge">Sets direction<br>and priorities.</strong></p></div><p class="act-link">Discuss &amp;<br>clarify<span class="act-arrow">⇄</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/po-distinct-v2.png" alt="The AI Product Owner, with silver hair and glasses"><div><h3>PO<span class="role-tag">AI</span></h3></div></div><p>Records decisions in<br>the specification<br>(spec.md) and scopes<br>the next issue.</p></div><p class="act-link">Write<span class="act-arrow">→</span></p><div class="act-box thing"><h3>GitHub Issue</h3><p>Serves as a Product<br>Backlog Item (PBI).<br>States the purpose,<br>scope and<br>acceptance criteria.</p></div></div>

<p class="act-next">The PO orders the work and marks an issue ready. This starts the coordinator and planning.</p>

<p class="act-note">Here, the human and AI PO lead refinement. Developers join at planning.<br>In Scrum, developers also take part in refinement.</p>

---

<ol class="acts" aria-label="Scrum events and related activities"><li class="acts-label">Events &amp; activities</li><li>Refinement</li><li class="now">Planning</li><li>Development</li><li>Review</li><li>Retrospective</li></ol>

## Planning: agreeing on what and how

<p class="act-lead">Each issue follows the flow of a Sprint, without a fixed Sprint timebox.</p>

<div class="act-flow" role="figure" aria-label="Two AI developers independently plan the same issue. The coordinator presents their plans and questions. The human refines and approves the plans before implementation, resolving specification gaps with the PO."><div class="act-pair"><div class="act-box solo"><img class="" src="assets/roles/developer-1.png" alt="The Claude Code developer at a laptop"><div><h3>Developer<span class="role-tag">AI</span></h3><p class="act-dev">Claude Code</p><p>Reads the issue and<br>drafts a separate plan.</p></div></div><div class="act-box solo"><img class="" src="assets/roles/developer-2.png" alt="The Codex developer at a laptop"><div><h3>Developer<span class="role-tag">AI</span></h3><p class="act-dev">Codex</p><p>Reads the issue and<br>drafts a separate plan.</p></div></div></div><p class="act-link">Two<br>plans<span class="act-arrow">→</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3></div></div><p>Presents both plans<br>and open questions<br>to the human.</p></div><p class="act-link">Plans<span class="act-arrow">→</span></p><div class="act-box human"><div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human</h3></div></div><p>Checks the plans<br>against the goal.<br><strong class="act-judge">Refines and approves.</strong></p><p class="act-alt">↩ Gaps in the specification?<br>Resolve them with the PO.</p></div></div>

<p class="act-next">Once the human approves, both developers build and test their own planned solution.</p>

<p class="act-note">This process does not include a Daily Scrum.</p>

---

<ol class="acts" aria-label="Scrum events and related activities"><li class="acts-label">Events &amp; activities</li><li>Refinement</li><li>Planning</li><li class="now">Development</li><li>Review</li><li>Retrospective</li></ol>

## Development: two solutions, mutual review

<p class="act-lead">Two developers work independently on the same issue, using the plans the human approved.</p>

<div class="act-flow" role="figure" aria-label="Claude Code and Codex each implement and test an approved plan, then open separate pull requests. They review each other’s work. The coordinator compares the solutions and review findings."><div class="act-box"><div class="act-who"><img class="" src="assets/roles/developer-1.png" alt="The Claude Code developer at a laptop"><div><h3>Developer<span class="role-tag">AI</span></h3><p class="act-dev">Claude Code</p></div></div><p>Builds and tests<br>the approved plan.<br>Opens PR 1.</p></div><p class="act-link">Review<br>each other's<br>PR<span class="act-arrow">⇄</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/developer-2.png" alt="The Codex developer at a laptop"><div><h3>Developer<span class="role-tag">AI</span></h3><p class="act-dev">Codex</p></div></div><p>Builds and tests<br>the approved plan.<br>Opens PR 2.</p></div><p class="act-link">Two PRs<br>and review<br>findings<span class="act-arrow">→</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3></div></div><p>Compares both<br>solutions and<br>the review findings.</p></div></div>

<p class="act-next">The coordinator recommends a PR for the AI PO and the human to review.</p>

<p class="act-note">Within the approved plans, AI handles implementation, testing and mutual review.<br>No human work is required during this stage.</p>

---

<ol class="acts" aria-label="Scrum events and related activities"><li class="acts-label">Events &amp; activities</li><li>Refinement</li><li>Planning</li><li>Development</li><li class="now">Review</li><li>Retrospective</li></ol>

## Review: inspecting the result and deciding

<p class="act-lead">After developer reviews, the AI PO checks acceptance. Then the human reviews the result.</p>

<div class="act-flow" role="figure" aria-label="The coordinator recommends a PR. The AI PO checks the result against the specification and acceptance criteria, without reviewing code. The human then inspects the result and decides whether to adopt it, request fixes or revise the criteria with the PO."><div class="act-box"><div class="act-who"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3></div></div><p>Compares the two<br>solutions and reviews.<br>Recommends a PR.</p></div><p class="act-link">Proposed<br>PR<span class="act-arrow">→</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/po-distinct-v2.png" alt="The AI Product Owner, with silver hair and glasses"><div><h3>PO<span class="role-tag">AI</span></h3></div></div><p>Checks the result<br>against the specification<br>and acceptance criteria.<br>No code review here.</p><p class="act-alt">↩ If changes are needed,<br>the coordinator arranges<br>fixes and another check.</p></div><p class="act-link">Acceptance<br>findings<span class="act-arrow">→</span></p><div class="act-box human"><div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human</h3></div></div><p>Inspects the actual result.<br><strong class="act-judge">Decides whether to<br>adopt, request fixes,<br>or revise the criteria.</strong></p><p class="act-alt">↩ Revising criteria?<br>Update the specification<br>and issue with the PO.</p></div></div>

<p class="act-next">After the human chooses the result, the coordinator merges it, cleans up and starts the retrospective.</p>

---

<ol class="acts" aria-label="Scrum events and related activities"><li class="acts-label">Events &amp; activities</li><li>Refinement</li><li>Planning</li><li>Development</li><li>Review</li><li class="now">Retrospective</li></ol>

## Retrospective: improving how we work

<p class="act-lead">Once the chosen result is merged, look back at how the issue was handled.</p>

<div class="act-flow" role="figure" aria-label="After merging the chosen result, the coordinator proposes improvements based on test and review records. The human decides which to adopt. The coordinator updates procedures and documentation and hands specification findings to the AI PO for future refinement."><div class="act-box"><div class="act-who"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3></div></div><p>Uses test and review<br>records to identify<br>improvements backed<br>by evidence.</p></div><p class="act-link">Proposed<br>changes<span class="act-arrow">→</span></p><div class="act-box human"><div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="A person reviewing a plan"><div><h3>Human</h3></div></div><p>Considers each proposal.<br><strong class="act-judge">Chooses which<br>changes to adopt.</strong></p></div><p class="act-link">Approved<br>changes<span class="act-arrow">→</span></p><div class="act-box"><div class="act-who"><img class="" src="assets/roles/team.png" alt="The AI coordinator organizing the work"><div><h3>Coordinator<span class="role-tag">AI</span></h3></div></div><p>Updates procedures<br>and documentation.<br>Passes specification<br>findings to the AI PO.</p></div></div>

<p class="act-next">The AI PO and the human use the findings to refine future specifications and issues.</p>

<p class="act-note">Check whether the changes help on the next issue.<br>Approving a change, applying it and checking its effect are separate steps.</p>
