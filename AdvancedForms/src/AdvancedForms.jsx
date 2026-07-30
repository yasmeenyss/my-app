function AdvancedForm() {
    return (
        <form>
            <h2>Form with Checkbox, Radio & select</h2>

            <label>
                <input type="radio" name="gender" value="Male" />
                Male
            </label>

            <label>
                <input type="radio" name="gender" value="Female"/>
                Female
            </label>
            <br />

            <label>
              Country:
            <select name="country">
            <option value="India"> India</option>
            <option value="USA">USA</option>
            <option value="UK"></option>

            </select>
            </label>
            <br />
            <label>
                <input type="checkbox"  name="agree" />
                I agree to terms and conditions
            </label>
            <br />

            <button type="submit">Submit</button>

        </form>
    );
}

export default AdvancedForm