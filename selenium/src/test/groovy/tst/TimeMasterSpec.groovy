package tst

import geb.Module
import geb.Page
import geb.spock.GebSpec

class HistoryList extends Module {

    static base = { $('[data-test="history-list"]') }
    static content = {
        rows { $('[data-test="history-row"]') }
        rowWithDescription { descr -> rows.find('[data-test="description"]', text: descr) }
    }

}

class Dialog extends Module {
    static content = {
        descriptionInput { $('[data-test="input"] input') }
        button { $('[data-test="accept"]') }
    }

    def accept() {
        button.click()
    }

    def close() {

    }
}

class Home extends Page {

    static at = { title == 'Timemaster' }
    static url = '/'
    static content = {
        username { $('[data-test="user-name"]') }
        timerBtn { $('[data-test="timer-btn"]') }
        dialog(wait: true) { $('[data-test="dialog"]').module Dialog }
        historyList { module HistoryList }
    }

    def startTimer() {
        timerBtn.click()
        assert timerBtn.text() == 'STOP'
    }

    def startTimerAndWait(long ms) {
        startTimer()
        sleep(ms)
    }

    def stopTimer() {
        timerBtn.click()
        assert timerBtn.text() == 'START'
    }

    def addDescription(description) {
        dialog.descriptionInput << description
        dialog.accept()
    }
}

class TimeMasterSpec extends GebSpec {

    void setup() {
        to Home
    }

    def 'should display user name'() {
        expect:
        username.text() == 'Vasiliy Pupkin'
    }

    def 'add new task row'() {
        given:
        startTimerAndWait(1000)
        stopTimer()
        addDescription('new description')

        expect:
        historyList.rowWithDescription('new description').displayed
    }

    def 'do not accept task'() {
        given:
        def rowsNum = historyList.rows.size()
        startTimer()
        stopTimer()

        when:
        dialog.close()

        then:
        historyList.rows.size() == rowsNum
    }

//    def 'show error on history load failure'() {}

}