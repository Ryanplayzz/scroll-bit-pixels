basic.forever(function () {
    for (let row = 0; row <= scrollbit.rows(); row++) {
        for (let col = 0; col <= scrollbit.cols(); col++) {
            scrollbit.clear()
            scrollbit.setPixel(col, row, 128)
            scrollbit.show()
        }
    }
})
