import React from 'react'

function Home () {
  return  (
    <div>
        <h1>Welcome to the world of Gurus!</h1>
    </div>

  )
}
export default Home;


/* <div class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <div class="navbar-brand">
                <a href="/">Quite Interesting Quiz</a>
            </div>
        </div>
        <ul class="nav navbar-nav">
            <li>
                <a href="/questions/add">Create Question</a>
            </li>
            <li>
                <a href="/client/index.html">Take Test</a>
            </li>
            <li>
                <a href="/leaderboard">Leaderboard</a>
            </li>
        </ul>
    </div>
</div>
<div class="container">
    <h3>Add question</h3>
    <form method="POST">
        <div class="form-group">
            <label for="author">Author</label>
            <input class="form-control" id="author" name="author" type="text"/>
        </div>
        <div class="form-group">
            <label for="quiz">Quiz</label>
            <select class="form-control" id="quiz" name="quiz">
                <option value="gcp">-- Select Category --</option>
                <option value="gcp">Google Cloud Platform</option>
                <option value="people">People</option>
                <option value="places">Places</option>
            </select>
        </div>
        <div class="form-group">
            <label for="title">Title</label>
            <input class="form-control" id="title" name="title" type="text"/>
        </div>
        <div class="form-group">
            <label for="answerOne">Answer 1</label>
            <div class="input-group">
					<span class="input-group-addon">
						<input name="correctAnswer" type="radio" value="1"/>
					</span>
                <input class="form-control" id="answerOne" name="answerOne" type="text"/>
            </div>
        </div>
        <div class="form-group">
            <label for="answerTwo">Answer 2</label>
            <div class="input-group">
					<span class="input-group-addon">
						<input name="correctAnswer" type="radio" value="2"/>
					</span>
                <input class="form-control" id="answerTwo" name="answerTwo" type="text"/>
            </div>
        </div>
        <div class="form-group">
            <label for="answerThree">Answer 3</label>
            <div class="input-group">
					<span class="input-group-addon">
						<input name="correctAnswer" type="radio" value="3"/>
					</span>
                <input class="form-control" id="answerThree" name="answerThree" type="text"/>
            </div>
        </div>
        <div class="form-group">
            <label for="answerFour">Answer 4</label>
            <div class="input-group">
					<span class="input-group-addon">
						<input name="correctAnswer" type="radio" value="4"/>
					</span>
                <input class="form-control" id="answerFour" name="answerFour" type="text"/>
            </div>
        </div>
        <div class="form-group"/>
        <button class="btn btn-success" type="submit">Save</button>
    </form>
</div> */