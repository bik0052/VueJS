const tasks = {
  template: `
    <main id="tasks-main">
      <div>
        <h1>APPENDIX TWO</h1>
        <div>
          <button v-for="(aTask,index) in tasks" v-on:click="$router.push('/tasks/singleTask/' + methodsName[index])">
            {{ aTask }}
          </button>
        </div>
      </div>
    </main>
    `,
  data:() => {
    return {
      tasks:allTasks,
      methodsName:allMethodsNames,
    }		
  }
}