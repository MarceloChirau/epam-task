# Automated Testing Interview Questions

## Introduction

This document contains common interview questions for QA Automation Engineers.

Each question includes:

- Question
- Answer
- Example
- Related topics

Difficulty:

⭐ Beginner

⭐⭐ Intermediate

⭐⭐⭐ Advanced

---

# Testing Fundamentals

01. What is software testing?

02. Why is software testing important?

03. What is the difference between verification and validation?

04. What is the difference between an error, defect, bug, and failure?

05. What is the Software Testing Life Cycle (STLC)?

06. What is the Software Development Life Cycle (SDLC)?

07. What is a test case?

08. What is a test suite?

09. What is a test plan?

10. What is a test strategy?

11. What is an assertion?

12. What is the Test Pyramid?

13. What is Shift Left Testing?

---

# Testing Types

14. What is unit testing?

15. What is integration testing?

16. What is system testing?

17. What is end-to-end testing?

18. What is smoke testing?

19. What is sanity testing?

20. What is regression testing?

21. What is acceptance testing?

22. What is the difference between smoke and regression testing?

23. What is the difference between system testing and end-to-end testing?

24. What is the difference between functional and non-functional testing?

25. What is performance testing?

26. What is load testing?

27. What is stress testing?

28. What is security testing?

29. What is accessibility testing?

30. What is usability testing?

---

# Automation Fundamentals

31. What is test automation?

32. What are the advantages of automation?

33. What should NOT be automated?

34. What makes a good automated test?

35. What is a flaky test?

36. How do you reduce flaky tests?

37. What is data-driven testing?

38. What is parameterization?

39. What are fixtures?

40. What is Faker?

41. What is the Page Object Model (POM)?

42. Why should tests be independent?

43. What are explicit waits?

44. Why should browser.pause() be avoided?

45. What makes a good selector?

46. What is AAA (Arrange, Act, Assert)?

47. What is DRY?

48. Why use SOLID in automation frameworks?

49. What is test isolation?

50. What is mocking?

---

# JavaScript

51. Explain async/await.

52. What is a Promise?

53. What is the event loop?

54. Difference between == and ===?

55. Difference between var, let, and const?

56. What are arrow functions?

57. What are callbacks?

58. What are ES Modules?

59. What is CommonJS?

60. What is package.json?

61. What is npm?

62. What is Node.js?

63. What are environment variables?

64. What is .env?

---

# WebdriverIO

65. What is WebdriverIO?

66. Explain wdio.conf.js.

67. What are capabilities?

68. What are services?

69. What are reporters?

70. What are hooks?

71. Difference between browser and element commands?

72. How do you locate elements?

73. What are waitUntil(), waitForDisplayed(), and waitForClickable()?

74. How do you upload files?

75. How do you handle alerts?

76. How do you switch windows?

77. How do you execute JavaScript in the browser?

78. How do you handle iframes?

79. How do you take screenshots?

80. How do you run tests in parallel?

---

# Playwright

81. What is Playwright?

82. Selenium vs Playwright?

83. Playwright vs WebdriverIO?

84. What are Playwright fixtures?

85. What are browser contexts?

86. How does Playwright auto-waiting work?

87. How do you intercept network requests?

---

# Selenium

88. What is Selenium?

89. Selenium vs WebdriverIO?

90. Selenium vs Playwright?

91. What is Selenium Grid?

92. What are Desired Capabilities?

93. How does Selenium communicate with browsers?

---

# Jest / Mocha / Chai

94. How does Jest differ from Mocha?

95. What is Chai?

96. What are assertions?

97. What are hooks?

98. beforeEach() vs beforeAll()?

99. afterEach() vs afterAll()?

100. What is test parameterization?

---

# BDD

101. What is BDD?

102. Difference between BDD and TDD?

103. What is Gherkin?

104. What are Feature files?

105. What are Scenarios?

106. What are Step Definitions?

107. Given, When, Then explained.

---

# CI/CD

108. What is CI/CD?

109. Why is CI important?

110. Why is CD important?

111. What happens when you push code?

112. Where do automated tests fit into a pipeline?

113. What is Jenkins?

114. What is GitHub Actions?

115. What is a pipeline?

---

# Framework Design

116. Describe your automation framework.

117. How would you design a framework from scratch?

118. Why use the Page Object Model?

119. Where should test data be stored?

120. How do you organise a large automation project?

---

# Behavioural Questions

121. Tell me about your automation project.

122. Describe a difficult bug you found.

123. Describe a flaky test you fixed.

124. Have you worked in Agile?

125. How do you debug a failed test?

126. How do you prioritise automation?

127. How do you review another engineer's test?

128. What would you improve in your current framework?

129. What is your biggest automation challenge?

130. Why do you want to work here?

---

# Advanced Automation

131. What is the difference between implicit and explicit waits?

132. What is a stale element reference?

133. How do you handle dynamic elements?

134. How do you handle file downloads?

135. How do you handle file uploads?

136. How do you handle authentication?

137. How do you test APIs?

138. What is contract testing?

139. What is visual testing?

140. What is cross-browser testing?

141. What is parallel execution?

142. What are the advantages of parallel execution?

143. What challenges can parallel execution introduce?

144. How do you handle dynamic test data?

145. How do you test email functionality?

146. How do you test third-party integrations?

147. How do you handle retries in automation?

148. What metrics would you use to evaluate an automation suite?

149. How do you reduce maintenance costs in automation?

150. How do you decide whether a test should be automated?

---

# Advanced JavaScript

151. What is destructuring?

152. What is the spread operator (...)?

153. What is the rest operator (...)?

154. What is optional chaining (?.)?

155. What are template literals?

156. What is destructuring assignment?

157. What is the difference between null and undefined?

158. What is the difference between map(), filter(), and forEach()?

159. What is the difference between map() and reduce()?

160. What is object immutability?

161. What is a closure?

162. What is hoisting?

163. What is scope?

164. What is the difference between synchronous and asynchronous code?

165. What is Promise.all()?

166. What is Promise.race()?

167. What is exception handling?

168. What is try/catch/finally?

169. What are higher-order functions?

170. What is destructuring used for in test automation?

---

# Git & Version Control

171. What is Git?

172. What is GitHub?

173. What is version control?

174. Why is Git important for automation engineers?

175. What is a repository?

176. What is a branch?

177. What is the difference between main and feature branches?

178. What is a merge?

179. What is a merge conflict?

180. How do you resolve a merge conflict?

181. What is a pull request (PR)?

182. What is a code review?

183. What is a commit?

184. What makes a good commit message?

185. What is git stash?

186. What is git rebase?

187. What is git cherry-pick?

188. What is git revert?

189. What is the difference between merge and rebase?

190. Describe a typical Git workflow.

---

# Framework Architecture & Design

191. How do you organise page objects?

192. Where should assertions belong?

193. How do you manage test data?

194. How do you structure utility classes?

195. How do you separate configuration from code?

196. How do you organise test folders?

197. How do you organise reusable components?

198. How do you design a scalable automation framework?

199. How do you support multiple environments?

200. How do you support multiple browsers?

201. How do you manage secrets and credentials?

202. How do you manage environment variables?

203. How do you structure configuration files?

204. How do you avoid code duplication?

205. How do you decide what belongs in a Page Object?

206. What should not be placed inside a Page Object?

207. How do you design reusable helper functions?

208. How do you manage test reports?

209. How do you integrate automation into CI/CD?

210. Describe the architecture of your current automation framework.

---

# Real Project & Technical Review Questions

211. Walk me through your automation framework.

212. Why did you choose WebdriverIO?

213. Why did you choose Playwright?

214. What challenges did you face in your project?

215. How did you handle flaky tests?

216. What would you improve in your framework?

217. How do you debug a failing test?

218. How do you investigate a CI failure?

219. What was the most difficult bug you found?

220. What was the most difficult automation problem you solved?

221. How would you automate a login flow?

222. How would you automate an e-commerce checkout flow?

223. How would you automate a file upload feature?

224. How would you automate a search feature?

225. How would you test pagination?

226. How would you test a date picker?

227. How would you test a table with dynamic data?

228. How would you test a multi-step form?

229. How would you automate OTP authentication?

230. How would you test an API and UI together?