const singleTask = {
  template: `
    <main class="centered-main">
      <div class="single-task-div">
        <h1>{{ data.task }}</h1>
        <p><strong>Sum</strong> : {{ data.sum }}</p>
        <p v-if="data.average > 0"><strong>Average</strong> : {{ data.average }}</p>
        <p v-if="data.countOfNumbers > 0">
          [<strong>{{ data.countOfNumbers }}</strong> 
            <span v-if="data.countOfNumbers == 1">Number</span>
            <span v-if="data.countOfNumbers > 1">Numbers</span> 
            in specified range.]
        </p>
        <button v-on:click="$router.push('/tasks')">Back to All Tasks</button>
      </div>
    </main>
  `,
  data:()=>{
    return{
      data:null
    }
  },
  created(){
    this.data = new Model()
    this.data[this.$route.params.methodName]()
  }
}